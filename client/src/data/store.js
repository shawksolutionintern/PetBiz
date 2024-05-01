import { configureStore } from "@reduxjs/toolkit";

import ApptListReducer from "../components/homePage/apptlistSlice.js";


export const store = configureStore({
  reducer: {
    apptList: ApptListReducer,
  },
});

