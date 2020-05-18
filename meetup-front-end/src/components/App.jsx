import React from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx'
import AttendeeForm from './Attendee-Form.jsx'


class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      attendees: [],
    }
  }

  componentDidMount() {
    axios.get('/attendees')
      .then((data) => {this.updateAttendees(data.data)});
  }

  updateAttendees(data) {
    this.setState({
      attendees: data,
    })
  }

render() {
  return(
    <div className="main">
      <AttendeeForm />
      <Attendees />
    </div>
  )
}

}

export default App;
