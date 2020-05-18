import React from 'react';
import axios from 'axios';


class RegisterAttendee extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: 'XS',
      skillLevel: 'beginner',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let data = this.state;

    axios.post('/attendees', data)
    .then(response =>{
      console.log(response);
    })

    this.props.refresh();
  }

  render(){
    return(
      <form className="attendee-form" onSubmit={this.handleSubmit}>
        <label>First Name:
          <input type="text" name="firstName" value={this.state.firstName}  onChange={this.handleInputChange} />
        </label>
        <label>Last Name:
          <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handleInputChange} />
        </label>
        <label>Email:
          <input type="text" name="email" value={this.state.email}  onChange={this.handleInputChange} />
        </label>
        <label>Shirt Size:
          <select name="shirt" value={this.state.shirt} onChange={this.handleInputChange} >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XS</option>
            <option value="XXL">XS</option>
          </select>
        </label>
        <label>Skill Level:
          <select name ="skillLevel" value={this.state.skillLevel} onChange={this.handleInputChange} >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default RegisterAttendee;
