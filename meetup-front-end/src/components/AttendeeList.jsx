import React from 'react';
import AttendeeListItem from './AttendeeListItem.jsx';

const AttendeeList = (props) => {
  const { attendees } = props;

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {attendees.filter((attendee) => (attendee.skillLevel === 'beginner')).map((attendee) => (<AttendeeListItem attendee={attendee} key={attendee.id}/>))}
      <h3>Intermediate</h3>
      {attendees.filter((attendee) => (attendee.skillLevel === 'intermediate')).map((attendee) => (<AttendeeListItem attendee={attendee} key={attendee.id}/>))}
      <h3>Expert</h3>
      {attendees.filter((attendee) => (attendee.skillLevel === 'expert')).map((attendee) => (<AttendeeListItem attendee={attendee} key={attendee.id}/>))}
    </div>
  )
};

export default AttendeeList;