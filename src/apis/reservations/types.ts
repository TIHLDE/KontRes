export type DetailedReservation = {
  id: string;
  bookable_item: string;
  start_time: string;
  end_time: string;
  state: 'CONFIRMED' | 'PENDING' | 'CANCELLED';
  description: string;
  created_at: string;
  author: string;
};

export type DetailedItem = {
  id: string;
  name: string;
  description: string;
};
