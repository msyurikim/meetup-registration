import React from 'react';
import Form from './Form.jsx'


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);

    this.state = {
      attendees: [],
    }

  }
  render () {
    return (
      <div>
        <div>
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
