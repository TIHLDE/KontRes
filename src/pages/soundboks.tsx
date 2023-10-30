import { Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DateTimePicker } from '../components/DateTimePicker';
import { Header } from '../components/Header';
import { Kalender } from '../components/kalender/Kalender';

dayjs.extend(isBetween);

interface PageProps {
  props: any;
}

const fakeBookingData = {
  bookings: [
    {
      description: 'Ingenting gir bedre proggemotivasjon enn en god film om koding og forræderi, med selveste Zucc i hovedrollen',
      end: '21.00-04-10-2023',
      start: '20.00-03-10-2023',
      title: 'The social network and chill',
    },
    {
      description: 'Utløser brannalarmen hver eneste dag.',
      end: '16.00-29-09-2023',
      start: '08.00-27-09-2023',
      title: 'Vask av mikroen',
    },
  ],
};

export default function Page({ props }: PageProps) {
  const searchParams = useSearchParams();
  const [start, setStart] = useState<dayjs.Dayjs>(searchParams.get('start') ? dayjs(searchParams.get('start'), 'HH.mm-DD-MM-YYYY') : dayjs());
  const [slutt, setSlutt] = useState<dayjs.Dayjs>(searchParams.get('slutt') ? dayjs(searchParams.get('slutt'), 'HH.mm-DD-MM-YYYY') : dayjs());
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [available, setAvailable] = useState<boolean>(false);

  //sjekker om tidspunktet er ledig, i såfall gjør det mulig å booke
  useEffect(() => {
    for (let booking of fakeBookingData.bookings) {
      if (
        (start.isBetween(dayjs(booking.start, 'HH.mm-DD-MM-YYYY'), dayjs(booking.end, 'HH.mm-DD-MM-YYYY')) ||
          !slutt.isBetween(dayjs(booking.start, 'HH.mm-DD-MM-YYYY'), dayjs(booking.end, 'HH.mm-DD-MM-YYYY')) ||
          !(start.isBefore(dayjs(booking.start, 'HH.mm-DD-MM-YYYY')) && slutt.isAfter(dayjs(booking.end, 'HH.mm-DD-MM-YYYY')))) &&
        title.length > 0 &&
        desc.length > 0
      ) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [start, slutt, desc, title]);
  return (
    <>
      <Container maxWidth={'xl'} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 8 }} sx={{ my: 1 }}>
        <Paper variant='outlined' sx={{ p: 3 }}>
          <Stack gap={1}>
            <Typography variant='h3' textAlign={'center'}>
              Reserver SOUNDBOKS
            </Typography>
            <DateTimePicker title='Fra' value={start} setValue={setStart} />
            <DateTimePicker title='Til' value={slutt} setValue={setSlutt} />
            <TextField
              id='title'
              label='Tittel'
              placeholder='Tittel'
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              id='description'
              label='Beskrivelse'
              placeholder='Beskrivelse'
              value={desc}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDesc(e.target.value);
              }}
              multiline
            />
            <Button variant='contained' size='large' disabled={!available}>
              RESERVÉR
            </Button>
          </Stack>
        </Paper>
        <Paper variant='outlined'>
          <Kalender admin={false} />
        </Paper>
      </Container>
    </>
  );
}
