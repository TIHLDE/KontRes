import { Paper } from '@mui/material';
import { Kalender } from '../components/Calendar/Calendar';

export default function Page() {
  return (
    <>
      <Paper variant='outlined' sx={{ m: 5, p: 5 }}>
        <Kalender admin={false} full={true} />
      </Paper>
    </>
  );
}
