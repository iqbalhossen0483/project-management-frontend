import { api } from "../baseQuery";

const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    sendInvitation: builder.mutation({
      query: (data) => ({
        url: "/auth/send-invitation",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLogOutMutation,
  useSendInvitationMutation,
  useSignUpMutation,
} = authSlice;
