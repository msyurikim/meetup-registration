import React from 'react';
import CurrentAttendees from './CurrentAttendees.jsx'
import RegisterAttendee from './RegisterAttendee.jsx'


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
          <CurrentAttendees />
          <RegisterAttendee />
        </div>
    )
  }
}

export default App;
