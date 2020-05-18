import React from 'react';
import Attendee from 'Attendee.jsx'

const AttendeesList = ({attendees}) => {
  if(attendees) {
    const beginners = [];
    const intermediates = [];
    const experts = [];

    for (var i = 0; i < attendees.length; i++) {
      if (attendees[i].skillLevel === 'beginner') {
        beginners.push(attendees[i]);
      } else if (attendees[i].skillLevel === 'intermediate') {
        intermediates.push(attendees[i]);
      } else {
        experts.push(attendees[i]);
      }
    }

    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {beginners.map(attendee => {
          return (
            <Attendee key={attendee.id} attendee={attendee} />
          );
        })}
        <h3>Intermediate</h3>
        {intermediates.map(attendee => {
          return (
            <Attendee key={attendee.id} attendee={attendee} />
          );
        })}
        <h3>Expert</h3>
        {experts.map(attendee => {
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