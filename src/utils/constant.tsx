/**
 * Url to backend
 */
export const TIHLDE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
/**
 * Name of auth-token which is sent to backend to authenticate the user
 */
export const TOKEN_HEADER_NAME = 'X-CSRF-Token';
/**
 * Name of cookie which is used to store the authentication-token from backend
 */
export const ACCESS_TOKEN = 'TIHLDE-AccessToken';
/**
 * Name of cookie which is used to store whether the user has accepted our analytics popup
 */
export const ACCEPTED_ANALYTICS = 'TIHLDE-AcceptedAnalytics';
