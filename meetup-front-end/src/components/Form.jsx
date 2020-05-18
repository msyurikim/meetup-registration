import React from 'react';
import $ from 'jquery';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    }
  }

  inputHandler(event, key) {
    var inputsCopy = JSON.parse(JSON.stringify(this.state.inputs));
    inputsCopy[key] = event.target.value;
    this.setState({
      inputs: inputsCopy
    });
  }

  clickHandler() {
    $.post('/attendees', {
      firstName: this.state.inputs.first,
      lastName: this.state.inputs.last,
      email: this.state.inputs.email,
      shirt: this.state.inputs.shirt,
      skillLevel: this.state.inputs.level
    });
    // .done(() => get Attendees, and re-render?);
  }

  render() {
    return (
      <div className="attendee-form">
        {/* <!-- NOTE: This does not contain all required fields. --> */}
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={() => this.inputHandler(event, 'first')}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={() => this.inputHandler(event, 'last')}></input>
        </label>
        <label>Email address:
          <input type="text" onChange={() => this.inputHandler(event, 'email')}></input>
        </label>
        <label>Shirt Size:
          <select onChange={() => this.inputHandler(event, 'shirt')}>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </label>
        <label>Experience Level:
          <select onChange={() => this.inputHandler(event, 'level')}>
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