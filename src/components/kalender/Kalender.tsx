import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Grid, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useEffect, useRef, useState } from 'react';
import Backdrop from './Backdrop';
import EventChunk from './EventChunk';
import Topbar from './Topbar';
dayjs.extend(weekOfYear);

const fakeBookingData = {
  bookings: [
    {
      description: 'Ingenting gir bedre proggemotivasjon enn en god film om koding og forræderi, med selveste Zucc i hovedrollen',
      end: '21.00-26-09-2023',
      start: '20.00-25-09-2023',
      title: 'The social network and chill',
    },
    {
      description: 'Utløser brannalarmen hver eneste dag.',
      end: '16.00-29-09-2023',
      start: '08.00-27-09-2023',
      title: 'Vask av mikroen',
    },
    {
      description: 'brannalarmen hver eneste dag.',
      end: '20.00-04-10-2023',
      start: '00.00-04-10-2023',
      title: 'Vask av mikroen',
    },
  ],
};

interface KalenderProps {
  admin: boolean;
  full?: boolean;
}

export const Kalender = ({ admin, full }: KalenderProps) => {
  const [activeDay, setActiveDay] = useState(dayjs());
  const [fullSize, setFullSize] = useState(full || false);
  const [viewBy, setViewBy] = useState<String>('week'); //TODO: implement day view
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fullSize) {
      divRef.current?.scrollTo(0, 600);
    }
  }, [fullSize]);
  return (
    <Container maxWidth={'xl'} sx={{ p: 5 }}>
      <Topbar activeDay={activeDay} setActiveDay={setActiveDay} viewBy={viewBy} setViewBy={setViewBy} />
      <Container maxWidth={false} style={{ position: 'relative' }}>
        {!fullSize ? (
          <>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 100,
                zIndex: 10,
                backgroundImage: 'linear-gradient(to bottom, rgb(8,25,48, 0%), rgb(8,25,48, 50%), rgb(8,25,48, 80%),rgb(8,25,48))',
              }}></div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 100,
                zIndex: 10,
                backgroundImage: 'linear-gradient(to top, rgb(8,25,48, 0%), rgb(8,25,48, 50%), rgb(8,25,48, 80%),rgb(8,25,48))',
              }}></div>
          </>
        ) : null}
        <Grid
          container
          columns={8}
          ref={divRef}
          style={{
            position: 'relative',
            maxHeight: fullSize ? 'unset' : 400,
            overflowY: 'hidden',
          }}>
          {fakeBookingData.bookings.map((booking, index1) => {
            let start = dayjs(booking.start, 'HH.mm-DD-MM-YYYY');

            let end = dayjs(booking.end, 'HH.mm-DD-MM-YYYY');
            if ((start.week() != activeDay.week() || start.year() != activeDay.year()) && (end.week() != activeDay.week() || end.year() != activeDay.year()))
              return null;
            let chunks: Array<Array<dayjs.Dayjs>> = [];
            const splitDays = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
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
          })}
          <Backdrop />
        </Grid>
      </Container>
      <Stack justifyContent={'end'}>
        <Button variant='contained' endIcon={fullSize ? <RemoveIcon /> : <AddIcon />} style={{ marginLeft: 'auto' }}>
          <Typography onClick={() => setFullSize(!fullSize)} variant={'body2'}>
            {fullSize ? 'Trekk sammen kalender' : 'Se full kalender'}
          </Typography>
        </Button>
      </Stack>
    </Container>
  );
};
