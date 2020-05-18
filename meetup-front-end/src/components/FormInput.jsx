import React from 'react';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select a size',
      experience: 'Select an experience level',
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.postAttendee({
      firstName: this.state.first,
      lastName: this.state.last,
      email: this.state.email,
      shirt: this.state.size,
      skillLevel: this.state.experience,
    });
  };

  handleChange (e) {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value,
      }
    );
  };

  render () {
    return (
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <form>
        <label>First Name:
          <input type="text" name="first" onChange={this.handleChange.bind(this)}></input>
        </label>
        <label>Last Name:
          <input type="text" name="last" onChange={this.handleChange.bind(this)}></input>
        </label>
        <label>Email:
          <input type="text" name="email" onChange={this.handleChange.bind(this)}></input>
        </label>
        <label>Shirt Size:
          <select value={this.state.size} name="size" onChange={this.handleChange.bind(this)}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <br />
        <label>Experience Level:
        <select value={this.state.experience} name="experience" onChange={this.handleChange.bind(this)}>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </label>
        <button onClick={this.handleSubmit.bind(this)}>REGISTER</button>
      </form>
    </div>
    )
  };
};

export default FormInput;