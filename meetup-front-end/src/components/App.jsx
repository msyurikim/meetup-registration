import React from 'react';
import axios from 'axios';

import AttendeesForm from './AttendeesForm.jsx';
import AttendeesList from './AttendeesList.jsx';

class App extends React.Component {
  // YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };
    this.addAttendees = this.addAttendees.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
      .then(({data}) => {
        let newState = this.state;
        newState.attendees = data;
        this.setState(newState);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  addAttendees(attendee) {
    axios.post('/attendees', attendee)
      .then(response => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render () {
    return (
      <div className="main">
        <AttendeesForm handleAdd={this.addAttendees} />
        <AttendeesList attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;
