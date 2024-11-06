import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../../data/apptlistSlice";
import { fetchRequests } from "../../data/bookingSlice";
import Calender from "./Calender";
import ApptList from "./ApptList";
import AppointmentForm from "./AppointmentForm";
import { Button } from "antd";
import './css/HomePage.css';

const Home = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.apptList?.status || "idle");
  const apptLists = useSelector((state) => state.apptList?.list || []);
  const requestStatus = useSelector((state) => state.booking?.status || "idle");
  const bookingRequests = useSelector((state) => state.booking.requests);

  const [open, setOpen] = useState(false);

  let date = new Date().toJSON().substring(0, 10);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchList(date));
    }
    if (requestStatus === "idle") {
      dispatch(fetchRequests());
    }
  }, [fetchStatus, requestStatus, dispatch, date]);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <div className="homepage">
      <Button
        type="primary"
        className="make-appointment-button"
        onClick={() => setOpen(true)}
      >
        + Make an Appointment
      </Button>
      <Calender list={apptLists} />
      <ApptList />
      <AppointmentForm open={open} onCreate={onCreate} onCancel={() => setOpen(false)} />
    </div>
  );
};

export default Home;



