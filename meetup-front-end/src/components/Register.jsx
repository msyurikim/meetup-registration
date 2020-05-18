import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email:
          <input type="email"></input>
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
        <button onClick={() => this.handleOnClick()}>REGISTER</button>
      </div>
    )
  }
}

export default Register;
