import React from 'react';
import Beginner from './Beginner.jsx';
import Intermediate from './Intermediate.jsx'
import Expert from './Expert.jsx';

const Attendees = (props) => {
  return (
    <div className="attendees">
      <div>
      <h2>Beginners</h2>
      {props.beginners.map((beginner, key) => {
       return <Beginner status={beginner} key={key} />
      })}
      </div>

      <div>
      <h2>intermediates</h2>
        {props.intermediates.map((intermediate, key) => {
       return <Intermediate status={intermediate} key={key} />
      })}
      </div>

      <div>
       <h2>Experts</h2>
        {props.experts.map((expert, key) => {
       return <Expert status={expert} key={key} />
      })}
      </div>
    </div>
  )
}

export default Attendees