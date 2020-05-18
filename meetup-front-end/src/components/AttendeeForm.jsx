import React from 'react';

class AttendeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input value={this.props.firstName} type="text" onChange={this.props.onFirstNameChange}></input>
        </label>
        <label>Last Name:
          <input value={this.props.lastName} type="text" onChange={this.props.onLastNameChange}></input>
        </label>
        <label>Email Address:
          <input value={this.props.email} type="text" onChange={this.props.onEmailChange}></input>
        </label>
        <label>Shirt Size:
          <span> </span>
          <select type="text" onChange={this.props.onShirtSizeChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <span> </span>
        <label>Experience Level:
          <span> </span>
          <select type="text" onChange={this.props.onSkillLevelChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button onClick={this.props.onRegister}>REGISTER</button>
      </div>
    );
  }
}

export default AttendeeForm;
