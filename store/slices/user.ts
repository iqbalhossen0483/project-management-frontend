import { createSlice } from "@reduxjs/toolkit";

type UserStore = {
  user: User | null;
  token: string | null;
};

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  } as UserStore,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, logout, setToken, removeToken } = user.actions;
export default user.reducer;
