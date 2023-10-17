import { getItem, getReservation } from "@/apis/reservations/reservations";
import Reservation from "./components/Reservation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { DetailedReservation } from "@/apis/reservations/types";
import { useRouter } from "next/router";

const ReservationSlug = ({
  reservation,
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Reservation
      reservationId={id as string}
      reservation={{ ...reservation, itemName: item?.name ?? "" }}
    />
  );
};

export const getServerSideProps = (async ({ params }) => {
  try {
    const reservation = await getReservation(params?.id + "");
    const items = await getItem(reservation.data.bookable_item);

    // The filtering is done because the endpoint for getting a specific item is not implemented yet
    const item = items.data.filter(
      (e) => e.id === reservation.data.bookable_item
    )?.[0];

    return {
      props: {
        reservation: {
          ...reservation.data,
        },
        item,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{
  reservation: DetailedReservation;
}>;

export default ReservationSlug;
