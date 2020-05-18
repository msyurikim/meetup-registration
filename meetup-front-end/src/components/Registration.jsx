import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: '',
    };
  }

  render() {
    const { firstName, lastName, email, shirt, skillLevel } = this.state;

    return (
      <form className="attendee-form" onChange={this.handleOnChange} onSubmit={e => this.handleSubmit(e)}>
        <h2>Register Attendee</h2>
        <label>First Name:</label>
        <input type="text" id="firstName" />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lastName" />
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" />
        <label htmlFor="shirt">Shirt Size:</label>
        <input type="text" id="shirt" />
        <label htmlFor="level">Experiance Level:</label>
        <input type="text" id="skillLevel" />
        <button type="submit">REGISTER</button>
      </form>
    );
  }
}

export default Registration;

{/* <div class="attendee-form">
  <!-- NOTE: This does not contain all required fields. -->
  <h2>Register Attendee</h2>
  <label>First Name:
    <input type="text"></input>
  </label>
  <label>Last Name:
    <input type="text"></input>
  </label>
  <button>REGISTER</button>
</div> */}