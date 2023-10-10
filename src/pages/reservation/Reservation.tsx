import { getReservation } from "@/apis/reservations/reservations";
import { DetailedReservation } from "@/apis/reservations/types";
import Page from "@/components/Page";
import { Grid, Paper, PaperProps, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { parseISO } from "date-fns";
import { formatDate } from "@/utils/date";

interface ReservationProps {
  reservationId: string;
  reservation: DetailedReservation & { itemName: string };
}

/**
 * This is a page that displays a given reservation. It is not rendered directly by next, but
 * rather through ./[id].tsx, which uses this component to render a reservation page.
 *
 * @param param0.reservation Pre-loaded reservation data
 * @returns The page
 */
const Reservation = ({ reservation, reservationId }: ReservationProps) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: "reservation",
    queryFn: () => getReservation(reservationId).then((res) => res.data),
    initialData: reservation,
  });

  if (isFetching) {
    return <Typography>Fetching</Typography>;
  }

  if (isError) {
    return <Typography>Something went wrong</Typography>;
  }

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Stack
            minWidth={210}
            width={"100%"}
            px={2}
            py={1}
            gap={1}
            component={({ ...props }: PaperProps) => (
              <Paper {...props} variant="outlined" />
            )}
          >
            <Typography
              variant="h2"
              sx={{
                marginY: 0,
              }}
            >
              Detaljer
            </Typography>
            <DetailText
              label="Fra:"
              value={formatDate(parseISO(reservation?.start_time))}
            />
            <DetailText
              label="Til:"
              value={formatDate(parseISO(reservation?.end_time))}
            />
            <DetailText
              label="Status:"
              value={reservation.state === "CONFIRMED" ? "Innvilget" : "Venter"}
            />
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Paper
            variant="outlined"
            sx={{
              px: 2,
              py: 3,
            }}
          >
            <Stack gap={1}>
              <Typography
                variant="h2"
                sx={{
                  my: 0,
                }}
              >
                Reservasjon av {reservation.itemName}
              </Typography>
              <Typography variant="body1">{reservation.description}</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};

interface DetailTextProps {
  label: string;
  value: string;
}
const DetailText = ({ label, value }: DetailTextProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Typography variant="body1" fontWeight={"bold"}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default Reservation;
