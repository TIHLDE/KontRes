type DetailedReservation = {
  id: string;
  bookable_item: string;
  start_time: Date;
  end_time: Date;
  state: string;
  description: string;
  created_at: Date;
  author: string;
};

export type { DetailedReservation };
