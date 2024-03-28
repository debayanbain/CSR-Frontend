import { fetchBaseQuery, createApi, BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react';

import { logout } from './authSlice';
import { BASE_URL } from '@/constants';


const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function baseQueryWithAuth(args: string | FetchArgs, api: BaseQueryApi, extra: {}) {
  const result = await baseQuery(args, api, extra);
  // Dispatch the logout action on 401.
  if (result.error && result.error.status === 401) {
    api.dispatch(logout({}));
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ['User', 'Map'],
  endpoints: (builder) => ({}),
});