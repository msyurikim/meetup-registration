import React from 'react';

const ExperList = (props) => {
  return (
    <div>
      {props.expert.map((attendee, i) => {
        return <div key={i} >{attendee.firstName + ' ' + attendee.lastName}</div>
      }
      )}
    </div>
  )
}

export default ExperList;