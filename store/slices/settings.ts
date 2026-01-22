import { createSlice } from "@reduxjs/toolkit";

const settings = createSlice({
  name: "settings",
  initialState: {
    showSidebar: true,
    theme: "light",
  },
  reducers: {
    toggleSideBar: (state, action) => {
      if (action.payload === undefined) {
        state.showSidebar = state.showSidebar === true ? false : true;
      } else {
        state.showSidebar = action.payload;
      }
    },
    setTheme: (state, action) => {
      const newTheme = action.payload;
      state.theme = newTheme;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleSideBar, setTheme, toggleTheme } = settings.actions;
export default settings.reducer;
