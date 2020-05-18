import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super (props);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
      });
  }


  render() {
    return (
      <div className="attendee-form">
      {/* <!-- NOTE: This does not contain all required fields. --> */}
        <h2>Register Attendee</h2>
        <label>First Name:
          <input onChange={(event) => {
            this.handleChange(event);
          }} id="firstName" type="text"></input>
        </label>
        <label>Last Name:
          <input onChange={(event) => {
            this.handleChange(event);
          }} id="lastName" type="text"></input>
        </label>
        <label>Email Address:
          <input onChange={(event) => {
            this.handleChange(event);
          }} id="email" type="email"></input>
        </label>
        <label>Shirt Size:
        <select onChange={(event) => {
            this.handleChange(event);
          }} id="shirt" className="signupSelectors" value="">
          <option value="" disabled>Select your shirt size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        </label>
        <label>Experience Level:
          <select onChange={(event) => {
            this.handleChange(event);
          }} id="skillLevel" className="signupSelectors" value="">
            <option value="" disabled>Select your skill level</option>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </label>
        <button id="register" onClick={(event)=> {
          this.props.handleSubmit(this.state);
        }}>REGISTER</button>
      </div>
    );
  }
}

export default Form;


