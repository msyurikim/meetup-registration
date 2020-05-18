import React from 'react';
import axios from 'axios';

import AddAttendeeForm from './AddAttendeeForm.jsx';
import Beginners from './Beginners.jsx';
import Intermediate from './Intermediate.jsx';
import Expert from './Expert.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: {
        all: [],
        beginner: [],
        intermediate: [],
        experienced: [],
      },
    };

    this.getAttendees = this.getAttendees.bind(this);
  }

  getAttendees() {
    axios.get('/attendees')
      .then((response) => {
        const all = response.data;
        let beginner = [];
        let intermediate = [];
        let expert = [];
        all.forEach((attendee) => {
          attendee.skillLevel === "beginner" ? beginner.push(attendee)
          : attendee.skillLevel === "intermediate" ? intermediate.push(attendee)
          : expert.push(attendee);
        });

        this.setState({
          attendees: {
            all,
            beginner,
            intermediate,
            expert,
          }
        });
      })
      .catch((error) => {
        this.setState({
          attendees: undefined,
        });
      });
  }

  componentDidMount() {
    this.getAttendees();
  }


  render() {
    return (
      <div className="main">
        <AddAttendeeForm />
        <div className="attendees">
          <h2>Attendees</h2>
          <Beginners />
          <Intermediate />
          <Expert />
        </div>
      </div>
    );
  }
}

export default App;
