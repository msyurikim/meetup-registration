// - A `Register Attendee` form, which should include fields for
//     - First name
//     - Last name
//     - Email address
//     - Shirt Size (one of XS, S, M, L, XL, XXL)
//     - Experience Level (one of beginner, intermediate, expert)
// - A `Register` button, which when clicked, should:
//     - Submit the attendee information to the server
//     - Update the Current Attendees list (after the information has been accepted by the server)

import React from 'react';

class RegisterAttendee extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    }
  }

  render() {
    return (
      <div class="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <button>REGISTER</button>
      </div>
    )
  }
}

export default RegisterAttendee;
