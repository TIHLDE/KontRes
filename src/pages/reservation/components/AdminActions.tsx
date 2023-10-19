import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { Paper, Button } from '@mui/material';
import { Stack } from '@mui/system';

/**
 * This component will be displayed on a reservation request page if the user has
 * admin priveleges. Otherwise, they will be hidden. Its function is to display
 * accept and reject buttons.
 */
const AdminActions = () => {
  return (
    <Paper variant='outlined' sx={{ paddingX: 2, paddingY: 2 }}>
      <Stack direction={'row'} gap={1} width={'100%'}>
        <Button
          variant='contained'
          startIcon={<Check />}
          color='success'
          sx={{
            color: 'white',
          }}
          fullWidth>
          Godkjenn
        </Button>
        <Button variant='contained' startIcon={<Close />} color='error' fullWidth>
          Avslå
        </Button>
      </Stack>
    </Paper>
  );
};

export default AdminActions;
