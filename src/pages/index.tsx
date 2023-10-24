import { getItems } from '@/apis/reservations/reservations';
import { DetailedItem } from '@/apis/reservations/types';
import Wave from '@/components/images/Wave';
import ItemSelectionBox from '@/components/inputs/ItemSelectionBox';
import { Box, Paper } from '@mui/material';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

const Home = ({ items }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          placeContent: 'center',
        }}>
        <ItemSelectionBox items={items} defaultValue='kontoret' />
      </Box>

      <Paper
        sx={{
          position: 'relative',
        }}>
        <Wave
          style={{
            position: 'absolute',
            transform: 'translateY(-100%)',
            color: 'red',
            width: '100%',
          }}
        />
      </Paper>
    </>
  );
};

export const getServerSideProps = (async () => {
  try {
    const items = (await getItems()).data;

    return {
      props: {
        items: items,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{
  items?: DetailedItem[];
}>;

export default Home;
