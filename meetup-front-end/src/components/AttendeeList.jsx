import React from 'react';


const AttendeeList = (props) => (

  <div>
    {props.aList.map((attendee) => <div>{attendee}</div>)}
  </div>

);

export default AttendeeList;