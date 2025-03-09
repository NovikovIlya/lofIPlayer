import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface NowPlaying {
  title: string;
}

export const radioApi = createApi({
  reducerPath: 'radioApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.allorigins.win/get?url=https://lofiradio.ru',
    responseHandler: async (response) => {
      const data = await response.json();
      return data.contents;
    },
  }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<NowPlaying, void>({
      query: () => '/js/nowplaying.php',
      transformResponse: (response: string) => {
        const decodedText = response.trim();
        return { title: decodedText };
      },
    }),
  }),
})

export const { useGetNowPlayingQuery } = radioApi;