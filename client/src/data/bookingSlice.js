import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_API } from "./SERVER"; 

const initialState = {
  requests: [],
  status: "idle",
  error: null,
};

export const fetchRequests = createAsyncThunk(
  "booking/fetchRequests",
  async () => {
    const response = await axios.get(`${SERVER_API}/api/booking/requests`);
    console.log("Fetched requests:", response.data.requests); // Debug statement
    return response.data.requests;
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    acceptRequest: (state, action) => {
      // handle accept logic
    },
    rejectRequest: (state, action) => {
      // handle reject logic
    },
    editRequest: (state, action) => {
      // handle edit logic
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.requests = action.payload;
      })
      .addCase(fetchRequests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { acceptRequest, rejectRequest, editRequest } = bookingSlice.actions;

export default bookingSlice.reducer;




