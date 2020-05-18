import React from 'react';
import Form from './Form.jsx'
import AttendeesList from './AttendeesList.jsx'

class App extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
    <div className="main">
      <Form/>
      <AttendeesList/>
    </div>
    );
  }
}

export default App;