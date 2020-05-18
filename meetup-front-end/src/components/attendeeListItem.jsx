import React from 'react';

const AttendeeListItem = ({ firstName, lastName, skillLevel, desiredSkill }) => {

  let display;
  if (skillLevel === desiredSkill) {
    display = `${firstName} ${lastName}`;
  } else {
    display = '';
  }

  return (
    <div>{display}</div>
  )
}

export default AttendeeListItem;