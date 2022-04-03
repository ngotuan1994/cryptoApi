import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '87bece69eemshb72e6fa1ac3ee53p1a971djsn5e544cd486cc'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoNewsApiHeaders})



export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});


export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;
