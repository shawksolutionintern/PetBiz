import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import List from './List';
import BookingRequestList from './BookingRequestList'; 

const ApptList = () => {
  return (
    <div className='apptListView'>
      <MonthCalender />
      <BookingRequestList /> 
      <List />
    </div>
  );
};

const MonthCalender = () => {
  return (
    <div className='sideCalender'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        aspectRatio={1.5}
        initialView={"dayGridMonth"}
      />
    </div>
  );
};

export default ApptList;
