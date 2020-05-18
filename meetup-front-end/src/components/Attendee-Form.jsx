import React, { useState } from 'react';

const AttendeeForm = (props) => {
  return(
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <label>First Name:
        <input type="text"></input>
      </label>
      <label>Last Name:
        <input type="text"></input>
      </label>
      <button>REGISTER</button>
    </div>
  )
}

export default AttendeeForm;