import React from 'react';

const AttendeeCategory = (props) => {
  const { attendees, group } = props;
    return (
    <div>
      <h3>
        {group}
      </h3>
      {attendees.map((guest) => {
        const { firstName, lastName, skillLevel, id } = guest;
        if (skillLevel === group.toLowerCase()) {
          return (
            <div key={id}>
              {firstName} {lastName}
            </div>
          );
        }
      })}
    </div>
  );
}

export default AttendeeCategory;
