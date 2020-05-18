import React from 'react';
import axios from 'axios';
import AttendeeCategory from './AttendeeCategory.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      experience: '',
      attendees: [],
      groups: ['Beginner', 'Intermediate', 'Expert']
    };
    this.changeFirst = this.changeFirst.bind(this);
    this.changeLast = this.changeLast.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeShirt = this.changeShirt.bind(this);
    this.changeXP = this.changeXP.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeFirst(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  changeLast(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  changeShirt(e) {
    this.setState({
      shirt: e.target.value
    });
  }
  changeXP(e) {
    this.setState({
      experience: e.target.value
    });
  }

  componentDidMount() {
    this.retrieve();
  }

  retrieve() {
    axios.get('/attendees')
      .then(({ data }) => {
        this.setState((prevState, props) => {
          return { attendees: data };
        });
      })
      .catch((err) => {
        console.log('Fetch error:', err);
      });
  }

  post(data) {
    axios.post('/attendees', {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  submitHandler(e) {

  }

  render() {
    const { firstName, lastName, email, shirt, experience, attendees, groups } = this.state;
    return (
      <div className="main">
        <h2>
          Register Attendee
        </h2>
        <div className="attendee-form">
          {/* onSubmit goes here */}
          <label>First Name:
            <input type="text" value={firstName} onChange={this.changeFirst} />
          </label>
          <label>Last Name:
            <input type="text" value={lastName} onChange={this.changeLast} />
          </label>
          <label>Email Address:
            <input type="text" value={email} onChange={this.changeEmail} />
          </label>
          <label>Shirt Size:
            <input type="text" value={shirt} onChange={this.changeShirt} />
          </label>
          <label>Experience:
            <input type="text" value={experience} onChange={this.changeXP} />
          </label>
          <button type="submit" onSubmit={this.submitHandler} >REGISTER</button>
        </div>
        <div className="attendees">
          <h2>
            Attendees
          </h2>
        {groups.map((skill, index) => {
          return (
            <AttendeeCategory key={index} group={skill} attendees={attendees} />
          );
        })}
        </div>
      </div>
    )
  }
}

export default App;
