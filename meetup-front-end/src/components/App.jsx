import React from 'react';
import data from '../data.js';
import Register from './Register.jsx';
import AttendeeList from './AttendeeList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeeList: data,
      beginner: data.beginner,
      intermediate: data.intermediate,
      expert: data.expert,
    }
  }

  render() {
    return (
      <div>
        <h1>JS MEETUP</h1>
        <div className='main'>
          <Register className="attendee-form" />
          <AttendeeList
            className="attendees"
            beginner={this.state.beginner}
            intermediate={this.state.intermediate}
            expert={this.state.expert}
          />


        </div>
      </div>
    )
  }

}

export default App;
