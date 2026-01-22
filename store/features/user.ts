import { api } from "../baseQuery";
import { removeToken, setUser } from "../slices/user";

const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/auth/me",
      providesTags: ["user"],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (error) {
          dispatch(removeToken());
          console.log("error from get user: ", error);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userSlice;
