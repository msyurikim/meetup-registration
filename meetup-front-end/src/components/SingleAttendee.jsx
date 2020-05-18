import React from 'react';

var SingleAttendee = (props) => (

  <div>
    {props.info.firstName} {props.info.lastName}
  </div>

);

export default SingleAttendee;