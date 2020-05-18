import React from 'react';

const List = ({attendees}) => (
  <div>
    <h2>Attendees</h2>
    <div>
      <h3>Beginner</h3>
      {attendees.filter((attendee) => attendee.skillLevel === 'beginner')
        .map(beginner => <li>{`${beginner.firstName} ${beginner.lastName}`}</li>)}
    </div>
    <div>
      <h3>Intermediate</h3>
      {attendees.filter((attendee) => attendee.skillLevel === 'intermediate')
        .map(intermediate => <li>{`${intermediate.firstName} ${intermediate.lastName}`}</li>)}
    </div>
    <div>
      <h3>Expert</h3>
      {attendees.filter((attendee) => attendee.skillLevel === 'expert')
        .map(expert => <li>{`${expert.firstName} ${expert.lastName}`}</li>)}
    </div>
  </div>
);

export default List;