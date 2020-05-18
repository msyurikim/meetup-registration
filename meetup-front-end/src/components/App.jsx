import React from 'react';
import Attendees from './Attendees.jsx';
import Register from './Register.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="main">
        <Register />
        <Attendees />
      </div>
    )
  }
}

export default App;
