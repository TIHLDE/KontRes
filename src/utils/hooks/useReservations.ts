import { getReservation } from "@/apis/reservations/reservations";
import { DetailedReservation } from "@/apis/reservations/types";
import { QueryOptions, useQuery } from "@tanstack/react-query";

type UseReservationItemsProps = {
  uuid: string;
} & QueryOptions<DetailedReservation, unknown>;

const useReservations = ({ uuid, ...options }: UseReservationItemsProps) => {
  const obj = useQuery({
    queryKey: ["reservation_item"],
    queryFn: async () => (await getReservation(uuid)).data,
    ...options,
  });

  return obj;
};

export default useReservations;
