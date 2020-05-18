import React from 'react';

const BeginnerList = (props) => {
  return (
    <div>
      {props.beginner.map((attendee, i) => {
        return <div key={i} >{attendee.firstName + ' ' + attendee.lastName}</div>
      }
      )}
    </div>
  )
}

export default BeginnerList;