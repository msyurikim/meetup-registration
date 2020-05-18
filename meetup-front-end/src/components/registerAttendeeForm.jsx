import React from 'react';

const RegisterAttendeeForm = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="shirt size" />
        <input type="text" placeholder="experience level" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default RegisterAttendeeForm;