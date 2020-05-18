import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      email: "",
      size: "",
      experience: "",
    };

    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
  }

  componentDidMount() {

  }

  handleFirst(value) {
    this.setState({
      first: value,
    });
  }

  handleLast(value) {
    this.setState({
      last: value,
    });
  }

  handleEmail(value) {
    this.setState({
      email: value,
    });
  }

  handleSize(value) {
    this.setState({
      size: value,
    });
  }

  handleExperience(value) {
    this.setState({
      experience: value,
    });
  }

  render() {

    return (
      <div>
      <form className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={(e) => { this.handleFirst(e.target.value)}}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={(e) => { this.handleLast(e.target.value)}}></input>
        </label>
        <label>Email Address:
          <input type="text" onChange={(e) => { this.handleEmail(e.target.value)}}></input>
        </label>
        <label>Shirt Size:
          <div className="shirt">
          <input name="size" type="radio" onClick={() => { this.handleSize('XS') }}></input><p>XS</p>
          <input name="size" type="radio" onClick={() => { this.handleSize('S') }}></input><p>S</p>
          <input name="size" type="radio" onClick={() => { this.handleSize('M') }}></input><p>M</p>
          <input name="size" type="radio" onClick={() => { this.handleSize('L') }}></input><p>L</p>
          <input name="size" type="radio" onClick={() => { this.handleSize('XL') }}></input><p>XL</p>
          <input name="size" type="radio" onClick={() => { this.handleSize('XXL') }}></input><p>XXL</p>
          </div>
        </label>
        <label>Experience:
          <input type="text" onChange={(e) => { this.handleExperience(e.target.value)}}></input>
        </label>
        <button onClick={(e) => { e.preventDefault(); console.log(this.state)}}>REGISTER</button>
      </form>
      </div>
    );

  }
}

export default Form;


