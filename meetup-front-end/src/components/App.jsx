import React from 'react';
import Form from './Form.jsx'
import AttendeesList from './AttendeesList.jsx'

class App extends React.Component {
  constructor(props) {
    super (props);
  }

  handleSubmit(attendee) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(attendee);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(attendee),
      redirect: 'follow'
    };

    fetch("/attendees", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
    <div className="main">
      <Form handleSubmit={this.handleSubmit.bind(this)}/>
      <AttendeesList attendees={this.props.attendees}/>

    </div>
    );
  }
}

export default App;