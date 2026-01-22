import { config } from "@/config/config";
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
    getAllUsers: builder.query({
      query: ({ page }) => `/user/all?page=${page}&limit=${config.dataLimit}`,
      providesTags: ["all-user"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/user/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["all-user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} = userSlice;
