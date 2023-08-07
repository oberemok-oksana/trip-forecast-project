import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TripType, SelectedTripType } from "../../types";
import { nanoid } from "nanoid";

type TripsStateType = {
  trips: TripType[];
  selectedTrip: { city: string; startDate: string; endDate: string };
};

const initialState: TripsStateType = {
  trips: [
    {
      city: "Kyiv",
      startDate: "01.08.2023",
      endDate: "10.08.2023",
      cityImage: "/images/kyiv.jpeg",
      id: nanoid(),
    },
    {
      city: "Bangkok",
      startDate: "07.08.2023",
      endDate: "12.08.2023",
      cityImage: "/images/bangkok.jpg",
      id: nanoid(),
    },
  ],
  selectedTrip: { city: "", startDate: "", endDate: "" },
};

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (state, action: PayloadAction<Omit<TripType, "id">>) => {
      const trip = {
        ...action.payload,
        id: nanoid(),
      };
      state.trips.push(trip);
    },
    selectTrip: (state, action: PayloadAction<SelectedTripType>) => {
      state.selectedTrip = action.payload;
    },
  },
});

export const { addTrip, selectTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
