import { getReservation } from "@/apis/reservations/reservations";
import { DetailedReservation } from "@/apis/reservations/types";
import { useQuery } from "@tanstack/react-query";
import Page from "@/components/Page";
import { CircularProgress, Grid, Stack } from "@mui/material";
import InformationBox from "./InformationBox";
import ReservationDescription from "./ReservationDescription";
import AdminActions from "./AdminActions";

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
    queryKey: ["reservation"],
    queryFn: async () => (await getReservation(reservationId)).data,
    initialData: reservation,
  });

  // XXX - Maybe show loading skeleton instead of a loading wheel?
  if (isFetching) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    );
  }

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <InformationBox
            author={data?.author as string}
            endTime={data?.end_time as string}
            startTime={data?.start_time as string}
            state={data?.state as DetailedReservation["state"]}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Stack gap={1}>
            <ReservationDescription
              description={data?.description as string}
              itemName={reservation.itemName}
            />
            {true && <AdminActions />}
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Reservation;
