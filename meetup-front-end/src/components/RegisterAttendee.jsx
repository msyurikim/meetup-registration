// - A `Register Attendee` form, which should include fields for
//     - First name
//     - Last name
//     - Email address
//     - Shirt Size (one of XS, S, M, L, XL, XXL)
//     - Experience Level (one of beginner, intermediate, expert)
// - A `Register` button, which when clicked, should:
//     - Submit the attendee information to the server
//     - Update the Current Attendees list (after the information has been accepted by the server)

// <div class="attendee-form">
// <!-- NOTE: This does not contain all required fields. -->
// <h2>Register Attendee</h2>
// <label>First Name:
//   <input type="text"></input>
// </label>
// <label>Last Name:
//   <input type="text"></input>
// </label>
// <button>REGISTER</button>
// </div>

import React from 'react';
import axios from "axios";

class RegisterAttendee extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: '',
      skill: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    const { firstName, lastName, email, shirtSize, skill } = this.state;

    return (
      <form onSubmit={event => this.handleSubmit(event)} className="attendee-form" onChange={this.handleOnChange}>
        <h2>Register Attendee</h2>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" id="lastName" />
        <label htmlFor="email">Email Address:</label>
        <input name="email" id="email" />
        <label htmlFor="shirtSize">Shirt Size:</label>
        <input name="shirtSize" id="shirtSize" />
        <label htmlFor="skill">Experiance Level:</label>
        <input name="skill" id="skill" />
        <button type="submit">REGISTER</button>
      </form>
    )
  }
}

export default RegisterAttendee;
