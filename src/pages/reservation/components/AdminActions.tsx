import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
import { Paper, Button } from "@mui/material";
import { Stack } from "@mui/system";

const AdminActions = () => {
  return (
    <Paper variant="outlined" sx={{ paddingX: 2, paddingY: 2 }}>
      <Stack direction={"row"} gap={1} width={"100%"}>
        <Button
          variant="contained"
          startIcon={<Check />}
          color="success"
          fullWidth
        >
          Godkjenn
        </Button>
        <Button
          variant="contained"
          startIcon={<Close />}
          color="error"
          fullWidth
        >
          Avslå
        </Button>
      </Stack>
    </Paper>
  );
};

export default AdminActions;
