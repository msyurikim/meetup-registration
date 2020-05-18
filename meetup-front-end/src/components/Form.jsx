import React from 'react';

class Form extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    shirt: 'M',
    skillLevel: '',
  }
}

handleChange(e) {
  event.preventDefault();

  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit() {
  event.preventDefault();

  const { firstName, lastName, email, shirt, skillLevel } = this.state
  const body = {
    firstName,
    lastName,
    email,
    shirt,
    skillLevel
  }
  console.log(body)
  fetch('/attendees', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => this.setState({
    firstName: '',
    lastName: '',
    email: '',
    shirt: '',
    skillLevel: ''
  }))
  .then(() => this.props.onSubmit())
}

render() {
  return (
    <form>
      <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.handleChange(e)}></input>
        </label>
        <label>Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.handleChange(e)}></input>
        </label>
        <label>Email:
          <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}></input>
        </label>
        <label>Shirt Size:
          <select name="shirt" value={this.state.shirt} onChange={(e) => this.handleChange(e)}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Experience:
          <select name="skillLevel" value={this.state.skillLevel} onChange={(e) => this.handleChange(e)}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button onClick={() => this.handleSubmit()}>REGISTER</button>
    </form>
  )}
}

export default Form;