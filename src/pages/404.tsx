import Link from 'next/link';
import { NextPage } from 'next';
import { Box, Typography, Button } from '@mui/material';

const NotFoundPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        textAlign: 'center',
      }}>
      <Typography variant='h1'>404 - Siden finnes ikke</Typography>
      <Typography variant='body1' sx={{ color: 'white' }}>
        Beklager, men siden du prøver å nå finnes ikke.
      </Typography>
      <Link href='/' passHref>
        <Button variant='outlined' color='primary' sx={{ color: 'white' }}>
          Gå tilbake til forsiden
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
