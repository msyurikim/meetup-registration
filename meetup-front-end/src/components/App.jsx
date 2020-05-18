import React from 'react';
import axios from 'axios';

import Attendees from './Attendees.jsx';


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    }
  }

  componentDidMount() {
    axios.get('/attendees')
      .then((res) => {
        this.setState({
          attendees: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="main">
        <Attendees attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;
