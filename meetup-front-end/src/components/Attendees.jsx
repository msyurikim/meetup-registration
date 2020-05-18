import React from 'react';

const Attendees = (props) => (
  <div>
    <ul>
      {props.attendees.map((person, id) => {
        return <li key={id}>
        {person.skillLevel === 'beginner' ?
          <p>
            {person.firstName} {person.lastName}
          </p>
        : person.skillLevel === 'intermediate' ? <p>
        {person.firstName} {person.lastName}
      </p> : person.skillLevel === 'expert' ? <p>
            {person.firstName} {person.lastName}
          </p> : null }
        </li>
      })}
    </ul>
  </div>
)

export default Attendees;