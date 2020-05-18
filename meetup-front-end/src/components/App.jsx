import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
      .then(results => {
        console.log(results);
      });
  }

  render () {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default App;
