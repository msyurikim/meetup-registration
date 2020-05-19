import React from 'react';
import $ from 'jquery';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputs: {},
      first: '',
      last: '',
      email: '',
      shirt: 'XS',
      level: 'beginner'
    }
  }

  inputHandler(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  clickHandler() {
    $.post('/attendees', {
      firstName: this.state.first,
      lastName: this.state.last,
      email: this.state.email,
      shirt: this.state.shirt,
      skillLevel: this.state.level
    })
    .done(() => this.props.getAttendees());
  }

  render() {
    console.log(this.state);
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={(event) => this.inputHandler(event, 'first')}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={(event) => this.inputHandler(event, 'last')}></input>
        </label>
        <label>Email address:
          <input type="text" onChange={(event) => this.inputHandler(event, 'email')}></input>
        </label>
        <label>Shirt Size:
          <select value={this.state.shirt} onChange={(event) => this.inputHandler(event, 'shirt')}>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </label>
        <label>Experience Level:
          <select value={this.state.level} onChange={(event) => this.inputHandler(event, 'level')}>
            <option>beginner</option>
            <option>intermediate</option>
            <option>expert</option>
          </select>
        </label>
        <button onClick={this.clickHandler.bind(this)}>REGISTER</button>
      </div>
    );
  }
}

export default Form;