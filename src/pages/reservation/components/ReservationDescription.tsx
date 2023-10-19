import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';

interface ReservationDescriptionProps {
  itemName: string;
  description: string;
}

const ReservationDescription = ({ itemName, description }: ReservationDescriptionProps) => {
  return (
    <Paper
      variant='outlined'
      sx={{
        px: 2,
        py: 3,
      }}>
      <Stack gap={1}>
        <Typography
          variant='h2'
          sx={{
            my: 0,
          }}>
          Reservasjon av {itemName}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </Stack>
    </Paper>
  );
};

export default ReservationDescription;
