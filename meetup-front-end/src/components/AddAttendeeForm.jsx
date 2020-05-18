import React from 'react';

const AddAttendeeForm = () => {
  return (
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
};

export default AddAttendeeForm;
