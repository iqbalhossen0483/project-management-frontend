import { api } from "../baseQuery";

const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLogOutMutation } = authSlice;
