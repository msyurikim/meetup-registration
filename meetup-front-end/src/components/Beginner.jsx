import React from 'react';

const Beginner = (props) => {
  return (
  <div>
    <h3> firstName {props.status.firstName} lastName {props.status.lastName}</h3>
  </div>
  )
}

export default Beginner;