import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const apptLists = useSelector((state) => state.apptList.list);

  return (
    <div className="listCalender">
      {apptLists.map((appt, index) => (
        <div key={index} className="appt-item">
          <p><strong>{appt.title}</strong></p>
          <p>{appt.start} - {appt.end}</p>
          <p>{appt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
