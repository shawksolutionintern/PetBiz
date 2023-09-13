import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_API} from "../../data/SERVER"
import axios from "axios";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

export const fetchList = createAsyncThunk(
  "appointmentList/fetchList",
  async (date) => {
    const response = await axios.get(
      `${SERVER_API}/api/appt/?date=` + date
    );
    return response.data.list;
  }
);

const ApptListSlice = createSlice({
  name: "appointmentList",
  initialState,
  reducers: {},
  extraReducers(builder) {
     builder
       .addCase(fetchList.pending, (state) => {
         state.status = "loading";
       })
       .addCase(fetchList.fulfilled, (state, action) => {
         state.status = "success";
         state.list = [];
         state.list = state.list.concat(action.payload);
       })
       .addCase(fetchList.rejected, (state, action) => {
         state.status = "fail";
         state.error = action.error.message;
       });
  }
})

export const { eventListUpdated } = ApptListSlice.actions;
export default ApptListSlice.reducer;


