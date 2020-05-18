import React from 'react';

const AttendeeList = ({ attendees, experience }) => {
const attendeeList = attendees.map((a) => (<div key={a.id}>{a.firstName} {a.lastName}</div>));
  return (
    <div>
      <h3>{experience}</h3>
      {attendeeList}
    </div>
  );
}

export default AttendeeList;
