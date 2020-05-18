import React from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx'
import AttendeeForm from './Attendee-Form.jsx'


class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {

    }
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
