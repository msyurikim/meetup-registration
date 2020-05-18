import React from 'react';

import axios from 'axios';

class AttendeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: 'XS',
      experience: 'beginner',
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this. handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSizeChange(e) {
    this.setState({
      shirtSize: e.target.value
    });
  }

  handleExperienceChange(e) {
    this.setState({
      experience: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    let submission = this.state;
    axios.post('/attendees', submission)
      .then((response) => {
        console.log(response);
        this.props.refresh();
      })
      .then(() => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          shirtSize: 'XS',
          experience: 'beginner',
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
          <label>
            Shirt Size:
            <br />
            <select value={this.state.shirtSize} onChange={this.handleSizeChange}>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <br />
          </label>
          <label>
            Experience Level:
            <br />
            <select value={this.state.experience} onChange={this.handleExperienceChange}>
              <option value="beginner">beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="expert">expert</option>
            </select>
          </label>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default AttendeeForm;