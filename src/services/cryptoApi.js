import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '87bece69eemshb72e6fa1ac3ee53p1a971djsn5e544cd486cc'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoApiHeaders})



export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    GetCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinID) => createRequest(`/coin/${coinID}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinID, timePeriod}) => createRequest(`/coin/${coinID}/history?timePeriod=${timePeriod}`)
    })
  })
});


export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,
} = cryptoApi;
