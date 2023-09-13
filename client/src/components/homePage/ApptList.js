import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const ApptList = () =>{
    return(
        <div className='apptListView'>
            <MonthCalender />
            <List />
        </div>
    )

}




const MonthCalender =  ()=>{
    return (
      <div className='listCalender'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          aspectRatio={1.5}
  
          initialView={"dayGridMonth"}
        />
      </div>
    );


}


const List = () =>{

}


export default ApptList;