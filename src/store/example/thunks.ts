/* Instruments */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData as fetchDataQuery } from "./queries";

export const fetchData = createAsyncThunk("example/fetchData", async () => {
  const response = await fetchDataQuery();

  return response;
});
