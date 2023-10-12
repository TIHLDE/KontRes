import axios from "axios";
import { DetailedItem, DetailedReservation } from "./types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export const getReservation = (uuid: string) => {
  return axios.get<DetailedReservation>("/kontres/reservations/" + uuid + "/", {
    baseURL: baseUrl,
  });
};

export const getItem = (uuid: string) => {
  return axios.get<DetailedItem[]>("/kontres/bookable_items/", {
    baseURL: baseUrl,
  });
};
