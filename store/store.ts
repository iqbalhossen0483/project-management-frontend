import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./baseQuery";
import settings from "./slices/settings";
import user from "./slices/user";

// Configuration for persisting the settings slice
const settingsPersistConfig = {
  key: "settings",
  storage,
  whitelist: ["theme"],
};

// Create a persisted reducer for the settings slice
const persistedSettingsReducer = persistReducer(
  settingsPersistConfig,
  settings,
);

export const store = configureStore({
  reducer: {
    settings: persistedSettingsReducer,
    user,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

// Enable listener behavior for RTK Query
setupListeners(store.dispatch);

// Export the persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
