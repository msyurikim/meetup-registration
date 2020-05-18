import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };

    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getAttendeeInfo();
  }

  getAttendeeInfo() {
    fetch('/attendees')
      .then((res) => res.json())
      .then(data => this.setState ({ attendees: data }));
  }

  submitForm(formData) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch('/attendees', options)
      .then((res) => this.getAttendeeInfo())
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Form submitForm={this.submitForm}/>
        <List attendees={this.state.attendees}/>
      </div>
    );
  }
}

export default App;
