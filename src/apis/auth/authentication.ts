import axios from 'axios';

export interface signInProps {
  password: string;
  username: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
const authUrl = baseUrl + '/auth/login/';

export type SignInRequestResponse = {
  token: string;
};

export const signIn = ({ username, password }: signInProps) => {
  return axios.post<SignInRequestResponse>(
    authUrl,
    JSON.stringify({
      user_id: username,
      password,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
