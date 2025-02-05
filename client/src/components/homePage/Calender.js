import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 

const Calender = ({list}) => {
  console.log("list in Calender: ", list)
  let fullcalendarArr = list?.map((li)=>{
      let obj = {
        title: li.title,
        start: li.start,
        end: li.end,
      };
      return obj;
  })
  console.log("fullcalendarArr", fullcalendarArr);

  return (
    <div className="calender">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ]}
        initialView={"timeGridDay"}
        events={fullcalendarArr}
        headerToolbar={{
          left: 'title',  
          center: '',
          right: ''
        }}
        height="800px"
      />
    </div>
  );
};

export default Calender;
