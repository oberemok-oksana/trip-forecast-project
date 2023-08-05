import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CityType } from "../../types";

const cities: CityType[] = [
  { name: "Chiang Mai", image: "/images/bangkok.jpg" },
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
