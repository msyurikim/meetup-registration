import React from 'react';

const AttendeeListItem = (props) => {
  const { attendee } = props;

  return (
    <div>
      {`${attendee.firstName} ${attendee.lastName}`}
    </div>
  )
};

export default AttendeeListItem;