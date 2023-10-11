import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateTimePicker } from "../components/DateTimePicker";
import { Header } from "../components/Header";
import { Kalender } from "../components/kalender/Kalender";
import kontoret from "../media/kontoret.jpg";

const Home = () => {
  const [fra, setFra] = useState(dayjs());
  const [til, setTil] = useState(dayjs());
  const router = useRouter();

  function routeToBooking(type: string) {
    if (type === "kontoret") {
      router.push(
        "/kontoret?start=" +
          fra.format("HH.mm-DD-MM-YYYY") +
          "&slutt=" +
          til.format("HH.mm-DD-MM-YYYY"),
      );
    } else if (type === "soundboks") {
      router.push(
        "/soundboks?start=" +
          fra.format("HH.mm-DD-MM-YYYY") +
          "&slutt=" +
          til.format("HH.mm-DD-MM-YYYY"),
      );
    }
  }
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          marginTop: "-80px",
        }}
      >
        <Image
          src={kontoret}
          alt=""
          layout="fill"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            filter: "blur(7.2px)",
            overflow: "hidden",
            boxShadow: "inset 0 -10px 10px -10px #000000",
          }}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "90vh" }}
        >
          <Paper variant={"outlined"} elevation={5} sx={{ p: 5 }}>
            <Stack spacing={2}>
              <h1>Reserver</h1>
              <DateTimePicker title="Fra" value={fra} setValue={setFra} />
              <DateTimePicker title="Til" value={til} setValue={setTil} />
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={() => routeToBooking("kontoret")}
                  sx={{ width: "50%" }}
                  variant="contained"
                  size="large"
                >
                  Kontoret
                </Button>
                <Button
                  onClick={() => routeToBooking("soundboks")}
                  sx={{ width: "50%" }}
                  variant="contained"
                  size="large"
                >
                  Soundboks
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </div>
      <Container maxWidth="xl" sx={{ my: 20 }}>
        <Typography variant="h2">Kontoret</Typography>
        <Paper variant="outlined" sx={{ p: 5 }}>
          <Kalender admin={false} />
        </Paper>
      </Container>
      <Container maxWidth="xl" sx={{ my: 20 }}>
        <Typography variant="h2">Soundboks</Typography>
        <Paper variant="outlined">
          <Kalender admin={false} />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
