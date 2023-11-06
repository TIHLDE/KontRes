import axios from 'axios';

interface signInProps {
  password: string;
  username: string;
}

const authUrl = process.env.NEXTAUTH_URL;

export type SignInRequestResponse = {
  token: string;
};

export const signIn = ({ username, password }: signInProps) => {
  return axios.post<SignInRequestResponse>(authUrl as string, {
    body: {
      username,
      password,
    },
  });
};
