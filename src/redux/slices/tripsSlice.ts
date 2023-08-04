import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TripType } from "../../types";
import { nanoid } from "nanoid";

const initialState: TripType[] = [
  {
    city: "Kyiv",
    startDate: "01.05.2023",
    endDate: "11.05.2023",
    cityImage: "/images/kyiv.jpeg",
    id: nanoid(),
  },
  {
    city: "Bangkok",
    startDate: "07.09.2023",
    endDate: "28.09.2023",
    cityImage: "/images/bangkok.jpg",
    id: nanoid(),
  },
  {
    city: "Tokyo",
    startDate: "17.10.2023",
    endDate: "28.10.2023",
    cityImage: "/images/tokyo.png",
    id: nanoid(),
  },
];

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (
      state,
      action: PayloadAction<Omit<TripType, "id" | "cityImage">>
    ) => {
      const trip = {
        ...action.payload,
        cityImage: "/images/tokyo.png",
        id: nanoid(),
      };
      state.push(trip);
    },
  },
});

export const { addTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
