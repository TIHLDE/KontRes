import { Container } from '@mui/system';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useRef, useState } from 'react';
import Backdrop from './Backdrop';
import EventChunk from './EventChunk';
import Topbar from './Topbar';
dayjs.extend(weekOfYear);

const fakeBookingData = {
  bookings: [
    {
      description: 'test',
      end: '21.00-09-11-2023',
      start: '20.00-07-11-2023',
      title: 'test',
    },
  ],
};

interface KalenderProps {
  admin: boolean;
}

export const Kalender: React.FC<KalenderProps> = ({ admin }) => {
  const [activeDay, setActiveDay] = useState(dayjs());
  const [viewBy, setViewBy] = useState<String>('week'); //TODO: implement day view
  const divRef = useRef<HTMLDivElement>(null);

  //we must split the bookings into chunks so that a booking that spans multiple days can be displayed correctly
  const BookingChunks = () =>
    fakeBookingData.bookings.map((booking, index1) => {
      let start = dayjs(booking.start, 'HH.mm-DD-MM-YYYY');

      let end = dayjs(booking.end, 'HH.mm-DD-MM-YYYY');
      if ((start.week() != activeDay.week() || start.year() != activeDay.year()) && (end.week() != activeDay.week() || end.year() != activeDay.year()))
        //return if booking is not in active week
        return null;
      let chunks: Array<Array<dayjs.Dayjs>> = [];
      const splitDays = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
        //if booking spans multiple days, split it into chunks and call itself on next chunk, else just add it to chunks
        //recursive function go brr
        if (!start.endOf('day').isAfter(end)) {
          chunks.push([start, start.endOf('day')]);
          start = start.add(1, 'day').startOf('day');
          splitDays(start, end);
        } else {
          chunks.push([start, end]);
        }
      };
      splitDays(start, end);
      return chunks.map((chunk, index2) => {
        return <EventChunk key={index2.toString() + index1.toString()} booking={booking} chunk={chunk as [dayjs.Dayjs, dayjs.Dayjs]} />;
      });
    });

  return (
    <Container maxWidth={'xl'} sx={{ p: 5 }}>
      <Topbar activeDay={activeDay} setActiveDay={setActiveDay} viewBy={viewBy} setViewBy={setViewBy} />
      <>
        <Backdrop ref={divRef} activeDay={activeDay}>
          <BookingChunks />
        </Backdrop>
      </>
    </Container>
  );
};
