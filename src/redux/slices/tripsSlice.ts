import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TripType, SelectedTripType } from "../../types";
import { nanoid } from "nanoid";

const defaultTrips: TripType[] = [
  {
    city: "Kyiv",
    startDate: "2023-08-01",
    endDate: "2023-08-10",
    cityImage: "/images/kyiv.jpeg",
    id: nanoid(),
  },
  {
    city: "Bangkok",
    startDate: "2023-08-05",
    endDate: "2023-08-12",
    cityImage: "/images/bangkok.jpg",
    id: nanoid(),
  },
];

type TripsStateType = {
  trips: TripType[];
  selectedTrip: { city: string; startDate: string; endDate: string };
};

const initialState: TripsStateType = {
  trips: defaultTrips,
  selectedTrip: {
    city: defaultTrips[0].city,
    startDate: defaultTrips[0].startDate,
    endDate: defaultTrips[0].endDate,
  },
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
