import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: '',
      expLevel: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      shirtSize: this.state.shirtSize,
      expLevel: this.state.expLevel
    };
    this.props.submitForm(formData);
  }

  render() {
    const { firstName, lastName, email, shirtSize, expLevel} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input name="firstName" type="text" value={firstName} onChange={this.handleChange}/>
        </label>

        <label>
          Last Name:
          <input name="lastName" type="text" value={lastName} onChange={this.handleChange}/>
        </label>

        <label>
          Email:
          <input name="email" type="text" value={email} onChange={this.handleChange}/>
        </label>

        <label>
          Shirt Size:
          <select name="shirtSize" value={shirtSize} onChange={this.handleChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <br/>

        <label>
          Experience Level:
          <select name="expLevel" value={expLevel} onChange={this.handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
