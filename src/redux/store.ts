import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/tripsSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    trips: tripReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
