import { fetchExample } from "@/queries/example";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("example/fetchData", async () => {
  const response = await fetchExample();

  return response;
});
