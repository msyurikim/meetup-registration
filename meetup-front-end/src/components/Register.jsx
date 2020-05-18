import React from 'react';
import $ from 'jquery';

class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: ''
    }
  }

  updateFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  updateLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  updateShirt(e) {
    this.setState({
      shirt: e.target.value
    });
  }

  updateSkillLevel(e) {
    this.setState({
      skillLevel: e.target.value
    });
  }

  send() {

    var obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      shirt: this.state.shirt,
      skillLevel: this.state.skillLevel
    }

    $.ajax({
      context: this,
      data: obj,
      url: '/attendees',
      method: 'POST',
      success: function() {
        console.log('Success posting!');
      },
      error: function(err) {
        console.error('There was an error posting to server: ', err);
      }
    });
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={(e) => this.updateFirstName.call(this, e)}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={(e) => this.updateLastName.call(this, e)}></input>
        </label>
        <label>Email:
          <input type="text" onChange={(e) => this.updateEmail.call(this, e)}></input>
        </label>
        <label>Shirt Size:&nbsp;&nbsp;
          <select onChange={(e) => this.updateShirt.call(this, e)}>
            <option value="choose">Choose Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Experience:&nbsp;&nbsp;
          <select onChange={(e) => this.updateSkillLevel.call(this, e)}>
            <option value="choose">Choose Size</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button onClick={() => this.send.call(this)}>REGISTER</button>
      </div>
    );
  }
}

export default Register;