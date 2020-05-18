import React from 'react';

class Registration extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendee: {
        firstName: '',
        lastName:'',
        email:'',
        shirt: 'XS',
        skillLevel: 'beginner',
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state.attendee)
  }

  render () {
    console.log(this.props)
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" name='firstName' onChange={this.handleChange}></input>
        </label>
        <label>Last Name:
          <input type="text" name='lastName' onChange={this.handleChange}></input>
        </label>
        <label>Email Address:
          <input type="email" name='email' onChange={this.handleChange}></input>
        </label>
        <label>Select T-shirt size:
          <select id="shirtSize">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Experience Level:
          <select id="XP">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button onClick={() => {this.props.clickHandler()}}>REGISTER</button>
      </div>
    )
  }
}


export default Registration;