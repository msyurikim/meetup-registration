import React from 'react';
import AttendeeList from './AttendeeList.jsx';
import AttendeeForm from './AttendeeForm.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: []
    };

    this.getAttendees = this.getAttendees.bind(this);
    this.addAttendee = this.addAttendee.bind(this);
  }

  getAttendees() {
    axios.get('/attendees')
      .then((response) => {
        this.setState({
          attendees: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addAttendee(attendee) {
    const { attendees } = this.state;
    attendees.push(attendee);

    this.setState ({
      attendees: attendees
    });
  }

  componentDidMount() {
    this.getAttendees();
  }



  render() {
    const { attendees } = this.state;
    return(
      <div className="main">
        <AttendeeList attendees={attendees} />
        <AttendeeForm add={this.addAttendee}/>
      </div>
    );
  }

}

export default App;
