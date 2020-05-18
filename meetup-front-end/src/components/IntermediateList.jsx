import React from 'react';

const IntermediateList = (props) => {
  return (
    <div>
      {props.intermediate.map((attendee, i) => {
        return <div key={i} >{attendee.firstName + ' ' + attendee.lastName}</div>
      }
      )}
    </div>
  )
}

export default IntermediateList;