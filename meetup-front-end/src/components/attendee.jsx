import React from 'react';

const Attendee = function(props) {
  return (
    <div>{props.attendee.firstName} {props.attendee.lastName}</div>
  )
}

export default Attendee;