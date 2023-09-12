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
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
      />
    );


}


const List = () =>{

}


export default ApptList;