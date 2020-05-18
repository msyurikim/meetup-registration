import React from 'react';
import $ from 'jquery';
import Attendees from './Attendees.jsx';
import AttendeeForm from './AttendeeForm.jsx';


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: '',
    }
    this.getAttendees = this.getAttendees.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleShirtSizeChange = this.handleShirtSizeChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    $.ajax({
      url: '/attendees',
      type: 'GET',
      success: (data) => {
        this.setState({
          attendees: data
        });
      }
    })
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleShirtSizeChange(event) {
    this.setState({
      shirt: event.target.value
    });
  }

  handleSkillLevelChange(event) {
    this.setState({
      skillLevel: event.target.value
    });
  }

  handleRegister() {
    $.ajax({
      url: 'attendees',
      type: 'POST',
      data: {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.email,
        "shirt": this.state.shirt,
        "skillLevel": this.state.skillLevel
      },
      success: () => {
        this.getAttendees();
      }
    })
  }

  render() {
    return (
      <div className="main">
        <AttendeeForm
        onFirstNameChange={this.handleFirstNameChange}
        firstName={this.state.firstName}
        onLastNameChange={this.handleLastNameChange}
        lastName={this.state.lastName}
        onEmailChange={this.handleEmailChange}
        email={this.state.email}
        onShirtSizeChange={this.handleShirtSizeChange}
        onSkillLevelChange={this.handleSkillLevelChange}
        onRegister={this.handleRegister}
        />
        <Attendees attendees={this.state.attendees}/>
      </div>
    );
  }
}

export default App;
