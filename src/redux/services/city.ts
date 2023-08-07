import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CityType } from "../../types";

const cities: CityType[] = [
  { name: "Chiang Mai", image: "/images/bangkok.jpg" },
  { name: "Bangkok", image: "/images/bangkok.jpg" },
  { name: "Tokyo", image: "/images/tokyo.png" },
  { name: "Kyiv", image: "/images/kyiv.jpeg" },
  { name: "Lisbon", image: "/images/lisbon.png" },
];

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getCities: builder.query<CityType[], void>({
      queryFn: () => ({ data: cities }),
    }),
  }),
});

export const { useGetCitiesQuery } = cityApi;
