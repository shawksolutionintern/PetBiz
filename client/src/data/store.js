import { configureStore } from "@reduxjs/toolkit";
import apptListReducer from "./apptlistSlice";
import bookingReducer from "./bookingSlice";

const store = configureStore({
  reducer: {
    apptList: apptListReducer,
    booking: bookingReducer,
  },
});

export default store;


