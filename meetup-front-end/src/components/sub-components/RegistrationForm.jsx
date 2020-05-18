import React, { Component } from "react";
import axios from "axios";

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      shirt: "",
      skillLevel: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    //this.props.handleSubmit(this.state);
  }

  render() {
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Shirt Size: ", shirt);
    console.log("Skill: ", skillLevel);

    const { firstName, lastName, email, shirt, skillLevel } = this.state;
    return (
      <form
        onSubmit={(e) => this.handleSubmit(e)}
        className="attendee-form"
        onChange={this.handleOnChange}
      >
        <h2>Register Attendee</h2>
        <label htmlFor="fname">First Name:</label>
        <input name="firstName" id="firstName" onChange={this.handleOnChange} />
        <label htmlFor="lname">Last Name:</label>
        <input name="lastName" id="lastName" onChange={this.handleOnChange} />
        <label htmlFor="email">Email Address:</label>
        <input name="email" id="email" onChange={this.handleOnChange} />
        <label htmlFor="shirt">Shirt Size:</label>
        <select name="shirt" onChange={this.handleOnChange}>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <label htmlFor="skillLevel">Experience Level:</label>
        <select name="skillLevel" onChange={this.handleOnChange}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button type="submit">REGISTER</button>
      </form>
    );
  }
}

export default RegistrationForm;
