import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  creating: boolean;
  tripSearch: string;
}

const initialState: UiState = {
  creating: false,
  tripSearch: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showAddTripForm: (state) => {
      state.creating = true;
    },
    hideAddTripForm: (state) => {
      state.creating = false;
    },
    toggleAddTripForm: (state) => {
      state.creating = !state.creating;
    },
    setTripSearch: (state, action: PayloadAction<string>) => {
      state.tripSearch = action.payload;
    },
    resetTripSearch: (state) => {
      state.tripSearch = "";
    },
  },
});

export const {
  showAddTripForm,
  hideAddTripForm,
  toggleAddTripForm,
  setTripSearch,
  resetTripSearch,
} = uiSlice.actions;

export default uiSlice.reducer;
