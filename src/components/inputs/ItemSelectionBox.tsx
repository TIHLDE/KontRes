import { DetailedItem } from '@/apis/reservations/types';
import { FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';

interface ItemSelectionBoxProps {
  items?: DetailedItem[];
  defaultValue?: string;
}

const ItemSelectionBox = ({ items, defaultValue }: ItemSelectionBoxProps) => {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 5,
        height: 'fit-content',
      }}>
      <Stack
        gap={2}
        sx={{
          minWidth: {
            md: 300,
            xl: 500,
          },
        }}>
        <Typography>Hva ønsker du å reservere?</Typography>
        <FormControl fullWidth>
          <InputLabel id='resevable-item-label'>Velg et alternativ...</InputLabel>
          <Select defaultValue={defaultValue} labelId='reservable-item-label' id='resevable-item' label='Velg et alternativ...'>
            {items?.map((item) => <MenuItem value={item.name.toLowerCase()}>{item.name[0].toUpperCase() + item.name.slice(1)}</MenuItem>)}
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
};

export default ItemSelectionBox;
