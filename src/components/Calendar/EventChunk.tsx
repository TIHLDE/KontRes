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
  //hard to do this without absolute positioning
  return (
    <Paper
      variant={'outlined'}
      sx={{
        position: 'absolute',
        top: (chunk[0].hour() / 2) * 60 + chunk[0].minute() / 2,
        left: ((chunk[1].day() - 1) * 100) / 7 + '%',
        height: chunk[1].diff(chunk[0], 'minute') / 2,
        width: (1 / 7) * 100 + '%',
        borderRadius: 0.5, //TODO - set to theme
        overflow: 'hidden',
        backgroundColor: hexFromString(booking.title),
      }}></Paper>
  );
}

export default EventChunk;
