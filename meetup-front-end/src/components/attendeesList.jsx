import React from 'react';

const AttendeesList = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Beginner</h3>
      <ul>
        {
        props.attendees.filter(
          attendee => attendee.skillLevel === 'beginner'
        )
        .map(beginnerAttendee => {
          return (
            <li>{beginnerAttendee.firstName + beginnerAttendee.lastName}</li>
            )
          }
        )}
      </ul>
      <h3>Intermediate</h3>
      <ul>
        {
        props.attendees.filter(
          attendee => attendee.skillLevel === 'intermediate'
        )
        .map(intermediateAttendee => {
          return (
            <li>{intermediateAttendee.firstName + intermediateAttendee.lastName}</li>
            )
          }
        )}
      </ul>
      <h3>Expert</h3>
      <ul>
        {
        props.attendees.filter(
          attendee => attendee.skillLevel === 'expert'
        )
        .map(expertAttendee => {
          return (
            <li>{expertAttendee.firstName + expertAttendee.lastName}</li>
            )
          }
        )}
      </ul>
    </div>
  );
}

export default AttendeesList;