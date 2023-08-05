import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponseType } from "../../types";

const key: string = "6DBL6PY4RSA5K67FB6FFNZVQ3";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/",
  }),
  endpoints: (builder) => ({
    getTodayWeatherByCity: builder.query<WeatherResponseType, string>({
      query: (city) =>
        `timeline/${city}/today?unitGroup=metric&include=days&key=${key}&contentType=json&contentType=json`,
    }),
    getTripWeather: builder.query<
      WeatherResponseType,
      { city: string; startDate: string; endDate: string }
    >({
      query: ({ city, startDate, endDate }) =>
        `timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${key}&contentType=json`,
    }),
  }),
});

export const { useGetTodayWeatherByCityQuery, useGetTripWeatherQuery } =
  weatherApi;
