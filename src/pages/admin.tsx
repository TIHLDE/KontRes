import { Paper } from "@mui/material";
import { Header } from "../components/Header";
import { Kalender } from "../components/kalender/Kalender";

export default function Page() {
  return (
    <>
      <Header />
      <Paper variant='outlined' sx={{ m: 5, p: 5 }}>
        <Kalender admin={false} full={true} />
      </Paper>
    </>
  );
}
