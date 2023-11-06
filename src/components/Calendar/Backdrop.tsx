import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import Day from './Day';

import { ReactNode, RefObject } from 'react';

export default function Backdrop({ children, ref, activeDay }: { children: ReactNode; ref: RefObject<HTMLDivElement>; activeDay: dayjs.Dayjs }) {
  //gives the backdrop a grid with 24 rows and 7 columns
  return (
    <Grid
      columns={7}
      container
      ref={ref}
      sx={{
        position: 'relative',
        my: 2,
      }}>
      {[...Array(7)].map((_, day) => (
        <Grid item xs={1} key={day} sx={{ position: 'relative', height: '100%' }}>
          <Day day={day} activeDay={activeDay} />
        </Grid>
      ))}
      {children}
    </Grid>
  );
}
