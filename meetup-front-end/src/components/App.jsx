import React from 'react';
import $ from 'jquery';


import AttendeesList from './attendeesList.jsx';
import RegisterAttendeeForm from './registerAttendeeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAttendees: [],
    }
  }

  componentDidMount() {
    $.ajax('/attendees', {
      method: 'GET',
      success: (results) => {
        this.setState({
          currentAttendees: results,
        })
      },
      error: (err) => console.error(err)
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      shirt: e.target[3].value,
      skillLevel:e.target[4].value,
    }
    console.log(data)
    $.ajax('/attendees', {
      method: 'POST',
      data: data,
      success: (results) => {
        newArr = this.state.currentAttendees.push(results);
        this.setState({
          currentAttendees: newArr,
        })
      },
      error: (err) => console.error(err)
    })
  }

  render() {
    return (
      <div>
        <AttendeesList attendees={this.state.currentAttendees} />
        <RegisterAttendeeForm handleSubmit={this.handleFormSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
