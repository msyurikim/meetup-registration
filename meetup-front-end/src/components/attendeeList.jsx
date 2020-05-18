import React from 'react';
import Attendee from './attendee.jsx';

const AttendeeList = function(props) {
  return (
    <div className="attendees">
      <h2>Attendees</h2>
        {props.beginner && (
          <div>
            <h3>Beginner</h3>
              {props.beginner.map((att) =>
              <Attendee attendee={att} />)}
          </div>
        )}

        {props.intermediate && (
          <div>
            <h3>Intermediate</h3>
              {props.intermediate.map((att) =>
              <Attendee attendee={att} />)}
          </div>
        )}

        {props.expert && (
          <div>
          <h3>Expert</h3>
              {props.expert.map((att) =>
              <Attendee attendee={att} />)}
          </div>
        )}
    </div>
  )
}

export default AttendeeList;