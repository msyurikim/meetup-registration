import React from 'react';

class AttendeesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render () {
    return (
      <div class="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email Address:
          <input type="text"></input>
        </label>
        <label>Shirt Size:
          <input type="text"></input>
        </label>
        <label>Experience Level:
          <input type="text"></input>
        </label>
        <button>REGISTER</button>
      </div>
    );
  }
};

export default AttendeesForm;