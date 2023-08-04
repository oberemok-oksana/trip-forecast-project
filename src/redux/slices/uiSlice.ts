import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  creating: boolean;
}

const initialState: UiState = {
  creating: false,
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
  },
});

export const { showAddTripForm, hideAddTripForm, toggleAddTripForm } =
  uiSlice.actions;

export default uiSlice.reducer;
