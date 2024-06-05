import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../../data/apptlistSlice"; 
import { fetchRequests } from "../../data/bookingSlice"; 
import Calender from "./Calender";
import ApptList from "./ApptList";

const Home = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.apptList?.status || "idle");
  const apptLists = useSelector((state) => state.apptList?.list || []);
  const requestStatus = useSelector((state) => state.booking?.status || "idle");
  const bookingRequests = useSelector((state) => state.booking.requests);

  let date = new Date().toJSON().substring(0, 10);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchList(date));
    }
    if (requestStatus === "idle") {
      dispatch(fetchRequests());
    }
  }, [fetchStatus, requestStatus, dispatch]);

  console.log("Booking requests in Home:", bookingRequests); // Debug statement

  return (
    <div className="homepage">
      <Calender list={apptLists} />
      <ApptList />
    </div>
  );
};

export default Home;




