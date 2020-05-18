import React, { useState } from 'react';

const Attendees = (props) => {
  let beginner = [];
  let intermediate = [];
  let expert = [];

  const sortAttendees = (attendees) => {
    for (let attendee of attendees) {
      if (attendee.skillLevel === 'beginner') {
        beginner.push(attendee);
      } else if (attendee.skillLevel === 'intermediate') {
        intermediate.push(attendee);
      } else {
        expert.push(attendee);
      }
    }
  }

  sortAttendees(props.attendees);

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginner.map((person) => (
        <div key={person.id}>{`${person.firstName} ${person.lastName}`}</div>
      ))}
      <h3>Intermediate</h3>
      {intermediate.map((person) => (
        <div key={person.id}>{`${person.firstName} ${person.lastName}`}</div>
      ))}
      <h3>Expert</h3>
      {expert.map((person) => (
        <div key={person.id}>{`${person.firstName} ${person.lastName}`}</div>
      ))}
    </div>
  )
}

export default Attendees;