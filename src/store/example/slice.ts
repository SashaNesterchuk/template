import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./thunks";

const initialState: State = {
  example: "",
  status: undefined,
};

export const slice = createSlice({
  name: "example",
  initialState,
  reducers: {
    test: (state) => {
      state.example = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.example = action.payload[0];
      });
  },
});

export interface State {
  example: string;
  status?: "loading" | "idle";
}
