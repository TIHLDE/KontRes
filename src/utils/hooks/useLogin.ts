import { signIn } from '@/apis/auth/authentication';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCookie } from '../cookies';
import { ACCESS_TOKEN } from '../constant';
import { useRouter } from 'next/router';

interface UseLoginProps {
  redirect?: string;
}

const useLogin = ({ redirect = '/' }: UseLoginProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    error,
    isLoading,
    mutate: doSignIn,
  } = useMutation(signIn, {
    onSuccess: ({ data: { token } }) => {
      setCookie(ACCESS_TOKEN, token);

      queryClient.invalidateQueries();

      // Redirect to the redirect URL
      router.replace(redirect);
    },
    onError: (err) => {
      console.error('Could not sign in: ', err);
    },
  });

  return { error, isLoading, doSignIn };
};

export default useLogin;
