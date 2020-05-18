import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      shirt: 'S',
      experience: 'beginner'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ name: e.target.value});
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
          <form onSubmit={this.handleSubmit}>
            <label>First Name:
              <input type="text" name="firstName" onChange={this.handleInputChange}/>
            </label>
            <label>Last Name:
              <input type="text" name="lastName" onChange={this.handleInputChange}/>
            </label>
            <label>Email:
              <input type="text" name="email" onChange={this.handleInputChange}/>
            </label>
            <label>Shirt Size:
              <select value={this.state.shirt} name="shirt" onChange={this.handleInputChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </label>
            <label>Experience Level:
              <select value={this.state.experience} name="experience" onChange={this.handleInputChange}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </label>
            <button type="submit">REGISTER</button>
          </form>
      </div>
    )
  }
}

export default Form;