import React from 'react';

class Attendees extends React.Component {
  constructor(props) {
    super (props)
    this.state = {

    }


  }

render (props) {
  return (
<div className="attendees">
        <h2>Attendees</h2>
  <h3>Beginner</h3>
  {this.props.attendees.map(person => {
    if(person.skillLevel === 'beginner') {
      return (<div> {person.firstName} {person.lastName} </div>)
    }
  })}
        <h3>Intermediate</h3>
        {this.props.attendees.map(person => {
    if(person.skillLevel === 'intermediate') {
      return (<div> {person.firstName} {person.lastName} </div>)
    }
  })}
        <h3>Expert</h3>
        {this.props.attendees.map(person => {
    if(person.skillLevel === 'expert') {
      return (<div> {person.firstName} {person.lastName} </div>)
    }
  })}
      </div>
  )
}


}


export default Attendees;