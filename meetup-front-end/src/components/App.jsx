import React from 'react';
import axios from 'axios';

import AddAttendeeForm from './AddAttendeeForm.jsx';
import AttendeeList from './AttendeeList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: {
        all: [],
        beginner: [],
        intermediate: [],
        expert: [],
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

        this.setState((state) => {
          return {
            attendees: {
              all,
              beginner,
              intermediate,
              expert,
            }
          }
        });
      })
      .catch((error) => {
        this.setState({
          attendees: undefined,
        });
      });
  }

  addAttendee() {
    axios.post('/attendees')
  }

  componentDidMount() {
    this.getAttendees();
  }


  render() {
    const {
      attendees: {beginner} = [],
      attendees: {intermediate} = [],
      attendees: {expert} = [],
    } = this.state;
    console.log('Beginner: ', beginner);
    console.log('Intermediate: ', intermediate);
    console.log('Expert: ', expert);
    return (
      <div className="main">
        <AddAttendeeForm />
        <div className="attendees">
          <h2>Attendees</h2>
          <AttendeeList attendees={beginner} experience='Beginner' />
          <AttendeeList attendees={intermediate} experience='Intermediate' />
          <AttendeeList attendees={expert} experience='Expert' />
        </div>
      </div>
    );
  }
}

export default App;
