import React from 'react';
import Attendee from 'Attendee.jsx'

const AttendeesList = ({attendees}) => {
  if(attendees) {
    return (
      <div className="attendees">
        <h2>Attendees</h2>
        {attendees.map(attendee => {
          return (
            <Attendee key={attendee.id} attendee={attendee} />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>Loading Attendees...</div>
    );
  }
};

export default AttendeesList;