import { signIn } from '@/apis/auth/authentication';
import { Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useMutation } from '@tanstack/react-query';

export default function Page() {
  const {
    data,
    isLoading,
    mutate: doSignIn,
  } = useMutation(signIn, {
    onSuccess: (data) => console.log(data),
  });

  const handleSubmit = () => {
    doSignIn({ password: 'index123', username: 'index' });
  };

  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ height: '80vh' }}>
      <Paper variant={'outlined'} sx={{ p: 5 }}>
        <Stack spacing={2}>
          <Typography variant='h4'>Logg inn</Typography>
          <FormControl>
            <TextField label='Brukernavn' id='username' type='username' />
          </FormControl>
          <FormControl>
            <TextField label='Passord' id='password' type='password' />
          </FormControl>
          <Button size='large' variant='contained' type='submit' onClick={handleSubmit}>
            Logg inn
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
