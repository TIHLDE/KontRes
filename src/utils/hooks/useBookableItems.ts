import { getItem, getItems } from '@/apis/reservations/reservations';
import { DetailedItem } from '@/apis/reservations/types';
import { QueryOptions, useQuery } from '@tanstack/react-query';

type UseBookableItemsProps = {
  uuid?: string;
} & QueryOptions<DetailedItem[], unknown>; // <= We invoke QueryOptions to infer the function argument types of the useQuery hook!

/**
 * A simple hook that optionally uses a UUID to fetch either all, or a subset of all
 * bookable items.
 *
 * @returns An array of items. If UUID is specified, only one item will be returned
 * within the array.
 */
const useBookableItems = ({ uuid, ...options }: UseBookableItemsProps) => {
  const obj = useQuery({
    queryKey: ['bookable_items'],
    queryFn: async () => (uuid ? (await getItem(uuid)).data : (await getItems()).data),
    ...options,
  });

  return obj; // <= Returns an object with all the normal useQuery return values 🎉
};

export default useBookableItems;
