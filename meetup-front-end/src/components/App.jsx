import React from 'react';
import CurrentAttendeesList from './CurrentAttendeesList.jsx';
import Form from './Form.jsx';


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);

    this.state = {
      attendees: [],
    }
  }

  componentDidMount() {
    this.getAttendees()
  }

  onSubmit() {
    this.getAttendees()
  }

  getAttendees() {
    fetch('/attendees', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => this.setState({ attendees: res }))
      .catch(err => console.error(err));
  }

  render() {
    return (<div>
      <Form onSubmit={() => this.onSubmit()}/>
      <CurrentAttendeesList attendees={this.state.attendees}/>
    </div>)
  }
}

export default App;
