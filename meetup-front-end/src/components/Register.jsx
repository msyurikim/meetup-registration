import React from 'react';
import $ from 'jquery';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: ''
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  // NOTE: Was stuck on a typeerror for "Uncaught TypeError: Cannot read property 'state' of undefined" for about 35minutes...
  handleChange(e) {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, firstName, lastName, email, shirt, skillLevel } = this.state;
    $.ajax({
      method: 'POST',
      url: '/attendees',
      data: {
        id,
        firstName,
        lastName,
        email,
        shirt,
        skillLevel
      }
    })
      .done(() => {
        // invoke a method (passed from parent) to refresh attendees
      })
  }

  render() {
    const { firstName, lastName, email, shirt, skillLevel } = this.state;
    return (
      <form className="attendee-form" onSubmit={this.handleSubmit}>
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange}></input>
        </label>
        <label>Last Name:
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange}></input>
        </label>
        <label>Email:
          <input type="email" name="email" value={email} onChange={this.handleChange}></input>
        </label>
        <label>Shirt Size:
          <select>
            <option value=""></option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Experience Level:
          <select>
            <option value=""></option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>
        <input type="submit" value="REGISTER"></input>
      </form>
    )
  }
}

export default Register;
