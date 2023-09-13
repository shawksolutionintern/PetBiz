import { configureStore } from "@reduxjs/toolkit";

import ApptListReducer from "../components/homepage/apptlistSlice.js";


export const store = configureStore({
  reducer: {
    apptList: ApptListReducer,
  },
});

