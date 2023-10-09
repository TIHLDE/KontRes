import axios from "axios";
import { DetailedReservation } from "./types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export const getReservation = (uuid: string) => {
  return axios
    .get<DetailedReservation>("/kontres/reservations/" + uuid + "/", {
      baseURL: baseUrl,
    })
    .then((res) => {
      return {
        ...res,
        data: {
          ...res.data,
          created_at: new Date(res.data.created_at),
          end_time: new Date(res.data.end_time),
          start_time: new Date(res.data.start_time),
        },
      };
    });
};
