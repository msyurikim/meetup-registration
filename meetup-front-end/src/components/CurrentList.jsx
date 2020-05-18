import React from 'react';


class CurrentList extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    let attendees = this.props.attendees
    console.log(attendees)
    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
          {attendees.map((attendee) => {
            if(attendee.skillLevel === "beginner") {
              return <div key={attendee.id}>{attendee.firstName + ' ' + attendee.lastName}</div>
            }
          })}
        <h3>Intermediate</h3>
          {attendees.map((attendee) => {
            if(attendee.skillLevel === "intermediate") {
              return <div key={attendee.id}>{attendee.firstName + ' ' + attendee.lastName}</div>
            }
          })}
        <h3>Expert</h3>
          {attendees.map((attendee) => {
            if(attendee.skillLevel === "expert") {
              return <div key={attendee.id}>{attendee.firstName + ' ' + attendee.lastName}</div>
            }
          })}
      </div>
    )
  }
}


export default CurrentList;