import React from 'react';
import CurrentAttendees from './CurrentAttendees.jsx'
import RegisterAttendee from './RegisterAttendee.jsx'
import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      attendees: []
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

  handleSubmit(data) {
    const { firstName, lastName, email, shirtSize, skill } = data;
    axios.post("/attendees", {
        firstName,
        lastName,
        email,
        shirtSize,
        skill
      })
      .then(response => {
        return response.data;
      })
      .then(newAttendee => {
        this.setState({
          attendees: [...this.state.attendees, newAttendee]
        });
      })
      .catch(error => {
        console.log("There was an error in the App.jsx handleSubmit function");
      });
  }

  render() {
    return (
        <div className="main">
          <CurrentAttendees
            attendees={this.state.attendees}
            data={this.state.data}
          />
          <RegisterAttendee handleSubmit={this.handleSubmit} />
        </div>
    )
  }
}

export default App;
