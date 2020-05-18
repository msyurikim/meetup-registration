import React from 'react';


class Attendees extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {this.props.beginner.map((attendee) => (<div>{attendee.firstName}</div>))}
        <h3>Intermediate</h3>
        {this.props.intermediate.map((attendee) => (<div>{attendee.firstName}</div>))}
        <h3>Expert</h3>
        {this.props.expert.map((attendee) => (<div>{attendee.firstName}</div>))}
      </div>
    )
  }
}

export default Attendees;