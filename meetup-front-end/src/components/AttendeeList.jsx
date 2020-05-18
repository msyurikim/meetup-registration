import React from 'react';
import BeginnerList from './BeginnerList.jsx';
import IntermediateList from './IntermediateList.jsx';
import ExpertList from './ExpertList.jsx';

const AttendeeList = (props) => {
  return (
    <div>
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      <BeginnerList beginner={props.beginner} />
      <h3>Intermediate</h3>
      <IntermediateList intermediate={props.intermediate} />
      <h3>Expert</h3>
      <ExpertList expert={props.expert} />
    </div>
  )
}

export default AttendeeList;