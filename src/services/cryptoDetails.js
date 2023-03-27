import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoDetailsApiHeaders = {
  "X-RapidAPI-Key": "821542c86dmshef3c50fb0235f2dp13506ejsn48bebaae9026",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com/coin",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coin/";

const createRequest = (url) => ({ url, headers: cryptoDetailsApiHeaders });

export const cryptoDetailsApi = createApi({
  reducerPath: "cryptoDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`${coinId}`),
    }),
  }),
});

export const { useGetCryptoDetailsQuery } = cryptoDetailsApi;
