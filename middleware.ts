import { ACCESS_TOKEN, TOKEN_HEADER_NAME } from '@/utils/constant';
import { getCookie } from '@/utils/cookies';
import { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set(TOKEN_HEADER_NAME, getCookie(ACCESS_TOKEN) as string);
};
