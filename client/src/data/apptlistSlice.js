import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_API } from "./SERVER";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

export const fetchList = createAsyncThunk(
  "appointmentList/fetchList",
  async (date) => {
    const response = await axios.get(`${SERVER_API}/api/appt/?date=` + date);
    return response.data.list;
  }
);

const apptListSlice = createSlice({
  name: "appointmentList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apptListSlice.reducer;



