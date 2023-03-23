import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '791e8eec2amshdbf9840b6d39b1cp1dcda8jsn39bf774f68e5',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const mainUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, Headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ mainUrl }),
  endpoints: (builder) => ({
    getCrypts: builder.query({
      query: () => createRequest('coins')
    })
  })
});

export const {
  useGetCryptsQuery,
} = cryptoApi;


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'X-RapidAPI-Key': '791e8eec2amshdbf9840b6d39b1cp1dcda8jsn39bf774f68e5',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };