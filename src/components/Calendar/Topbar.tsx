import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Grid, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface TopbarProps {
  activeDay: dayjs.Dayjs;
  setActiveDay: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  viewBy: String;
  setViewBy: React.Dispatch<React.SetStateAction<String>>;
}

const weekDays = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

const months = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];

export default function Topbar({ activeDay, setActiveDay, viewBy, setViewBy }: TopbarProps) {
  return (
    <>
      <Stack direction={'row'} spacing={2} justifyContent={'end'} alignItems={'center'}>
        <ToggleButtonGroup
          color='primary'
          exclusive
          value={viewBy}
          onChange={(event: React.MouseEvent<HTMLElement>, newVal: string) => setViewBy(newVal)}
          aria-label='Platform'>
          <ToggleButton value='day'>Dag</ToggleButton>
          <ToggleButton value='week'>Uke</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
        <IconButton onClick={() => setActiveDay(activeDay.subtract(viewBy === 'week' ? 7 : 1, 'day'))}>
          <ArrowLeftIcon />
        </IconButton>
        <Typography variant={'h3'}>
          {viewBy === 'week' ? `uke ${activeDay.week()}, ${activeDay.year()}` : `${activeDay.date()}. ${months[activeDay.month()]}, ${activeDay.year()}`}
        </Typography>
        <IconButton onClick={() => setActiveDay(activeDay.add(viewBy === 'week' ? 7 : 1, 'day'))}>
          <ArrowRightIcon />
        </IconButton>
      </Stack>
      {viewBy === 'week' ? (
        <Stack direction={'row'}>
          {weekDays.map((day, index) => {
            return (
              <Box key={index} sx={{ width: '100%' }}>
                <Typography variant={'h6'} textAlign={'center'} sx={{ height: 48 }}>
                  {day}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      ) : (
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <Typography variant={'h6'} textAlign={'center'} sx={{ height: 48 }}>
              {weekDays[activeDay.day()]}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}
