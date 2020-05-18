import React from 'react';

const CurrentAttendeesList = (props) => {
  return (
    <div>
      <ul id="beginner">
        <h3>Beginner</h3>
      {props.attendees.map(attendee => {
        if (attendee.skillLevel === 'beginner') {
        return (
          <li key={attendee.id}>
            <div>{attendee.firstName} {attendee.lastName}</div>
          </li>
        )
        }
      })}
      </ul>
      <ul id="intermediate">
        <h3>Intermediate</h3>
      {props.attendees.map(attendee => {
        if (attendee.skillLevel === 'intermediate') {
        return (
          <li key={attendee.id}>
            <div>{attendee.firstName} {attendee.lastName}</div>
          </li>
        )
        }
      })}
      </ul>
      <ul id="expert">
        <h3>Expert</h3>
      {props.attendees.map(attendee => {
        if (attendee.skillLevel === 'expert') {
        return (
          <li key={attendee.id}>
            <div>{attendee.firstName} {attendee.lastName}</div>
          </li>
        )
        }
      })}
      </ul>
    </div>
  )
}

export default CurrentAttendeesList;