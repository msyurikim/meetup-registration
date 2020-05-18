import React from 'react';
import Attendee from 'Attendee.jsx'

const AttendeesList = ({attendees}) => {
  if(attendees) {

  } else {
    return (
      <div>Loading Attendees...</div>
    )
  }
};

export default AttendeesList;