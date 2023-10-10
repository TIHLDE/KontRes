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
      reservation={{ ...reservation, itemName: item.name }}
    />
  );
};

export const getServerSideProps = (async ({ params }) => {
  const reservation = await getReservation(params?.id + "");
  const items = await getItem(reservation.data.bookable_item);
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
}) satisfies GetServerSideProps<{
  reservation: DetailedReservation;
}>;

export default ReservationSlug;
