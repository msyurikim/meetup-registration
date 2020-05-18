import React from 'react';
import axios from 'axios';

import FormInput from './FormInput.jsx';
import Attendees from './Attendees.jsx';


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    };
  }

  getAllAttendees() {
    axios.get('/attendees')
    .then((res) => {
      this.setState({
        attendees: res.data,
      });
    })
    .catch((err) => {
      console.error('Error!');
    })
  }

  postAttendee(attendee) {
    console.log('clicked');
    axios.post('/attendees', attendee)
    .then((res) => {
      var newAttendees = this.state.attendees.slice();
      newAttendees.push(res.data);
      this.setState({
        attendees: newAttendees,
      });
    })
    .then(()=> {
      getAllAttendees();
    })
    .catch((err) => {
      console.error('Error!');
    })
  }

  componentDidMount() {
    this.getAllAttendees();
  }

  render() {
    return(
      <div>
        <FormInput postAttendee={this.postAttendee.bind(this)}/>
        <Attendees attendees={this.state.attendees}/>
      </div>
    )
  }
}

export default App;
