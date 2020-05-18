import React from 'react';
import SingleAttendee from './SingleAttendee.jsx';

var Attendees = (props) => (
<div>
  <div>
    <p>Attendees List</p>
  </div>
  <div>
    <p><strong>Beginner</strong></p>
    {props.currentAttendees.map((attendee, i) => {
      if (attendee.skillLevel === 'beginner') {
        return (
          <div key={i}>
            <SingleAttendee info={attendee} />
          </div>
          );
      }
    } )}
  </div>

  <div>
    <p><strong>Intermediate</strong></p>
    {props.currentAttendees.map((attendee, i) => {
      if (attendee.skillLevel === 'intermediate') {
        return (
          <div key={i}>
            <SingleAttendee info={attendee} />
          </div>
          );
      }
    } )}
  </div>

  <div>
    <p><strong>Expert</strong></p>
    {props.currentAttendees.map((attendee, i) => {
      if (attendee.skillLevel === 'expert') {
        return (
          <div key={i}>
            <SingleAttendee info={attendee} />
          </div>
          );
      }
    } )}
  </div>
</div>

);

export default Attendees;