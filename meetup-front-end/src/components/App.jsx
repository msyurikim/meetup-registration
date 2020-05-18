import React from 'react';
import $ from 'jquery';

import Form from './Form.jsx';
import Attendees from './Attendees.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: null
    };
  }

  componentDidMount() {
    $.get('/attendees')
      .then( res => {
        this.setState({
          attendees: res
        });
      })
      .catch( err =>
        res.status(400)
      );
  }

  render() {
    if (this.state.attendees) {
      return (
        <div className="main">
          <Form />
          <Attendees attendees={this.state.attendees} />
        </div>
      );
    } else {
      return null;
    }

  }
}

export default App;
