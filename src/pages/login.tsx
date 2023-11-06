import useLogin from '@/utils/hooks/useLogin';
import { Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';

type LoginData = {
  username: string;
  password: string;
};

export default function Page() {
  const { handleSubmit, formState, register } = useForm<LoginData>();
  const { doSignIn } = useLogin({});

  const onLogin = (data: LoginData) => {
    doSignIn({ username: data.username, password: data.password });
  };

  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ height: '80vh' }}>
      <Paper variant={'outlined'} sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onLogin)}>
          <Stack spacing={2}>
            <Typography variant='h4'>Logg inn</Typography>
            <FormControl>
              <TextField
                label='Brukernavn'
                id='username'
                type='username'
                {...register('username', {
                  required: 'Feltet er påkrevd',
                  validate: (value: string) => (value.includes('@') ? 'Bruk Feide-brukernavn, ikke epost' : undefined),
                })}
              />
            </FormControl>
            <FormControl>
              <TextField
                label='Passord'
                id='password'
                type='password'
                {...register('password', {
                  required: 'Feltet er påkrevd',
                })}
              />
            </FormControl>
            <Button size='large' variant='contained' type='submit'>
              Logg inn
            </Button>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
}
