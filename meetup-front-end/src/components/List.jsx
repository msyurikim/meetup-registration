import React from 'react';

const List = ({attendees}) => {
  const beginner = attendees.filter(attendee => attendee.skillLevel === 'beginner');
  const intermediate = attendees.filter(attendee => attendee.skillLevel === 'intermediate');
  const expert = attendees.filter(attendee => attendee.skillLevel === 'expert');

    return (
      <div className='attendees'>
        <h2>Attendee List</h2>
        <h3>Beginner</h3>
        {beginner.map((attendee, index) => <div key={index.toString()}>{attendee.firstName} {attendee.lastName}</div>)}
        <h3>Intermediate</h3>
        {intermediate.map((attendee, index) => <div key={index.toString()}>{attendee.firstName} {attendee.lastName}</div>)}
        <h3>Expert</h3>
        {expert.map((attendee, index) => <div key={index.toString()}>{attendee.firstName} {attendee.lastName}</div>)}
      </div>
  );
}

export default List;
