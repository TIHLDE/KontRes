import { ACCESS_TOKEN, TOKEN_PASSWORD } from '@/utils/constant';

export const ironOptions = {
  cookieName: ACCESS_TOKEN,
  password: TOKEN_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    token?: {
      id: string;
    };
  }
}
