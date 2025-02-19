import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Credentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;
