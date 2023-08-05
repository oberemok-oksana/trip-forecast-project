import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/tripsSlice";
import uiReducer from "./slices/uiSlice";
import { weatherApi } from "./services/weather";
import { cityApi } from "./services/city";

export const store = configureStore({
  reducer: {
    trips: tripReducer,
    ui: uiReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(cityApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
