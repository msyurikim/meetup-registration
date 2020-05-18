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

  render () {
    return (
      <div className="main">
        <AttendeesForm />
        <AttendeesList attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;
