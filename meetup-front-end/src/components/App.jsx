import React from 'react';
import CurrentAttendees from './CurrentAttendees.jsx'
import RegisterAttendee from './RegisterAttendee.jsx'
import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    }
  }

  componentDidMount() {
    axios.get('/attendees').then(response => {
      this.setState({
        attendees: response.data
      });
    })
    .catch(error => {
      console.log("There was an error fetching data from API")
    })
  }

  render() {
    return (
        <div className="main">
          <CurrentAttendees
            attendees={this.state.attendees}
            data={this.state.data}
          />
          <RegisterAttendee />
        </div>
    )
  }
}

export default App;
