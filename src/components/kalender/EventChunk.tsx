import { Paper } from '@mui/material';
import dayjs from 'dayjs';

const hexFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
};

interface EventChunkProps {
  booking: {
    title: string;
    description: string;
  };
  chunk: [dayjs.Dayjs, dayjs.Dayjs];
}

function EventChunk({ booking, chunk }: EventChunkProps) {
  console.log(chunk);
  return (
    <Paper
      variant={'outlined'}
      style={{
        position: 'absolute',
        top: chunk[0].hour() * 60 + chunk[0].minute(),
        left: 'calc(' + (chunk[1].day() * 12.5).toString() + '% + 2px)',
        height: chunk[1].diff(chunk[0], 'minute'),
        width: 'calc(12.5% - 4px)',
        padding: 8,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: hexFromString(booking.title),
      }}></Paper>
  );
}

export default EventChunk;
