import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: 'XS',
      experience: 'beginner',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleShirtSizeChange = this.handleShirtSizeChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  handleShirtSizeChange(e) {
    this.setState({
      shirtSize: e.target.value
    })
  }

  handleExperienceChange(e) {
    this.setState({
      experience: e.target.value
    })
  }

  handleRegister() {
    console.log(this.state.firstName);
    const obj = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.email,
        "shirt": this.state.shirtSize,
        "skillLevel": this.state.experience
      }
    this.props.handleRegister(obj);
  }



  render () {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={this.handleFirstNameChange}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={this.handleLastNameChange}></input>
        </label>
        <label>Email:
          <input type="text" onChange={this.handleEmailChange}></input>
        </label>
        <label>Shirt Size:
          <select onChange={this.handleShirtSizeChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Experience Level:
          <select onChange={this.handleExperienceChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button onClick={this.handleRegister}>REGISTER</button>
      </div>
    )
  }
}

export default Register;