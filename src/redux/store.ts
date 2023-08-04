import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/tripsSlice";

export const store = configureStore({
  reducer: {
    trips: tripReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
