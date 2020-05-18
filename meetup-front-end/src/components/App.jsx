import React from 'react';
import axios from 'axios';
import AttendeeList from './attendeeList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      beginner: [],
      intermediate: [],
      expert: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {

  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('SUBMIT')
  }
  componentDidMount() {
    axios.get('/attendees')
    .then((res) => {
      const resArr = res.data
      let begArr = [];
      let intArr = [];
      let expArr = [];
      resArr.forEach((attendee) => {
        if (attendee.skillLevel === "beginner") {
          begArr.push(attendee)
        }
        if (attendee.skillLevel === "intermediate"){
          intArr.push(attendee)
        }
        if (attendee.skillLevel === "expert"){
          expArr.push(attendee)
        }
        this.setState({
          beginner: begArr,
          intermediate: intArr,
          expert: expArr
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <div className="attendee-form">
              <h2>Register Attendee</h2>
              <label>First Name:
                <input
                  name="firstName"
                  type="text" />
              </label>
              <label>Last Name:
                <input
                  name="firstName"
                  type="text" />
              </label>
              <label>Email Address:
                <input
                  name="email"
                  type="text" />
              </label>
              <label>Shirt Size:
                <select className="dropdown">
                  <option value="">--please choose an option--</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </label>
              <label>Experience Level:
                <select className="dropdown">
                  <option value="">--please choose an option--</option>
                  <option value="beginner">beginner</option>
                  <option value="intermediate">intermediate</option>
                  <option value="expert">expert</option>
                </select>
              </label>
              <button
                type="submit">
                  REGISTER
              </button>
            </div>
          </form>
          <AttendeeList beginner={this.state.beginner} intermediate={this.state.intermediate} expert={this.state.expert}/>
      </div>
    )
  }

}

export default App;
