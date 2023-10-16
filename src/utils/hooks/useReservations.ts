import { getReservation } from "@/apis/reservations/reservations";
import { DetailedReservation } from "@/apis/reservations/types";
import { QueryOptions, useQuery } from "@tanstack/react-query";

type UseReservationItemsProps = {
  uuid: string;
} & QueryOptions<DetailedReservation, unknown>; // <= We invoke QueryOptions to infer the function argument types of the useQuery hook!

/**
 * A simple hook that uses a UUID to fetch a specific reservation.
 *
 * @returns The reservation with a matching UUID
 */
const useReservations = ({ uuid, ...options }: UseReservationItemsProps) => {
  const obj = useQuery({
    queryKey: ["reservation_item"],
    queryFn: async () => (await getReservation(uuid)).data,
    ...options,
  });

  return obj; // <= Returns an object with all the normal useQuery return values 🎉
};

export default useReservations;
