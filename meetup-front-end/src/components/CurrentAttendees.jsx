// - A `Current Attendees` list, which should include first + last names of attendes, grouped by experience level (beginner, intermediate, expert)

import React from 'react';

const CurrentAttendees = props => {
  const expert = [];
  const beginner = [];
  const intermediate = [];

  props.attendees.filter(a => {
    if (a.skillLevel === "expert") {
      expert.push(a);
    } else if (a.skillLevel === "beginner") {
      beginner.push(a);
    } else {
      intermediate.push(a);
    }
  });

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginner.map(beginner => {
        return (
          <div>
            {beginner.firstName} {beginner.lastName}
          </div>
        );
      })}
      <h3>Intermediate</h3>
      {intermediate.map(intermediate => {
        return (
          <div>
            {intermediate.firstName} {intermediate.lastName}
          </div>
        );
      })}
      <h3>Expert</h3>
      {expert.map(expert => {
        return (
          <div>
            {expert.firstName} {expert.lastName}
          </div>
        );
      })}
    </div>
  )
}

export default CurrentAttendees;
