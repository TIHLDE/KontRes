import axios from 'axios';
import { DetailedItem, DetailedReservation } from './types';
import { IGet } from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

/**
 * Gets a specific reservation given a reservation UUID.
 *
 * @param uuid The UUID
 * @returns Reservation details
 */
export const getReservation = (uuid: string) => {
  return IGet<DetailedReservation>({
    url: `/kontres/reservations${uuid}/`,
    config: {
      baseURL: baseUrl,
    },
  });
};

/* 
    !!!: The following two functions are very similar because there is no backend implementation for getting specific items. 
    Therefore, both functions do the same as of now.
  */
/**
 * Gets a specific item given an item UUID.
 *
 * @param uuid The UUID
 * @returns Item details
 */
export const getItem = (uuid: string) => {
  return IGet<DetailedItem[]>({
    url: '/kontres/bookable_items/',
    config: {
      baseURL: baseUrl,
    },
  });
};

/**
 * Gets all items in the database.
 *
 * @returns A list of all reservalble items
 */
export const getItems = () => {
  return IGet<DetailedItem[]>({
    url: '/kontres/bookable_items/',
    config: {
      baseURL: baseUrl,
    },
  });
};
