import React from 'react';

function Current(props) {

  console.log(props.data);

  var beginners = props.data.map(item => {
    if (item.skillLevel === 'beginner') {
      return (
        <div id={item.id} >{item.firstName + ' ' + item.lastName}</div>
      )
    }
  });

  var intermediates = props.data.map(item => {
    if (item.skillLevel === 'intermediate') {
      return (
        <div id={item.id} >{item.firstName + ' ' + item.lastName}</div>
      )
    }
  });

  var experts = props.data.map(item => {
    if (item.skillLevel === 'expert') {
      return (
        <div id={item.id} >{item.firstName + ' ' + item.lastName}</div>
      );
    }
  });

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginners}
      <h3>Intermediate</h3>
      {intermediates}
      <h3>Expert</h3>
      {experts}
    </div>
  );

}

export default Current;