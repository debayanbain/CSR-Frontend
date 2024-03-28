import { apiSlice } from '../apiSlice';
import { MAP_URL } from '@/constants';

export const mapApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadMapData: builder.query({
      query: (id) => ({
        url: `${MAP_URL}/${id}`,
      }),
      providesTags: ['Map'],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useLazyLoadMapDataQuery
} = mapApiSlice;