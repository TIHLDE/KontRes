import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

//lager en grid med 24 rader og 7 kolonner + tidspunktene
//litt mye magic
export default function Backdrop() {
  return (
    <>
      <Grid item sx={{ width: '12.5%' }}>
        <Stack alignItems={'end'}>
          <Box sx={{ height: 48 }}></Box>
          {[...Array(24)].map((_, index) => {
            return (
              <Typography key={index} textAlign={'center'} sx={{ height: 60, mr: 1 }} color={'text.secondary'}>
                {index.toString().padStart(2, '0') + ':00'}
              </Typography>
            );
          })}
        </Stack>
      </Grid>
      {[...Array(7)].map((day, index) => {
        return (
          <Grid key={index} item sx={{ width: '12.5%' }}>
            <Stack divider={<Divider />}>
              {[...Array(24)].map((_, index) => {
                return <Box key={index} sx={{ height: 59 }}></Box>;
              })}
            </Stack>
          </Grid>
        );
      })}
    </>
  );
}
