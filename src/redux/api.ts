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
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
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
