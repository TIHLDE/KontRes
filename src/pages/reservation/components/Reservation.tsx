import { getReservation } from "@/apis/reservations/reservations";
import { DetailedReservation } from "@/apis/reservations/types";
import Page from "@/components/Page";
import { Grid, Paper, PaperProps, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { parseISO } from "date-fns";
import { formatDate } from "@/utils/date";
import InformationBox from "./InformationBox";
import ReservationDescription from "./ReservationDescription";

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

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InformationBox
            author={data?.author as string}
            endTime={data?.end_time as string}
            startTime={data?.start_time as string}
            state={data?.state as DetailedReservation["state"]}
          />
        </Grid>
        <Grid item xs={9}>
          <ReservationDescription
            description={data?.description as string}
            itemName={reservation.itemName}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Reservation;
