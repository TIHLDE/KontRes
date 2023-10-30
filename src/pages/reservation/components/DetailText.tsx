import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface DetailTextProps {
  label: string;
  value: string;
}

const DetailText = ({ label, value }: DetailTextProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
      }}>
      <Typography variant='body1' fontWeight={'bold'}>
        {label}
      </Typography>
      <Typography variant='body1'>{value}</Typography>
    </Box>
  );
};

export default DetailText;
