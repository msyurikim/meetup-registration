import React from 'react';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      attendees: [],
      beginner: [],
      intermediate: [],
      advanced: [],
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: '', // XS, S, M, L, XL, XXL
      skillLevel: '' // beginner, intermediate, expert
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/attendees')
      .then(response => response.json())
      .then(data => (
        this.setState({attendees: data})
      ))
      .then(attendees.forEach((person) => (
        this.setState({ person[skillLevel]: {'firstName': person.firstName, 'lastName': person.lastName})
      )))
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }


  render(){
    return (
      <div style={{ width: '50%' }}>
        <h2>Attendees</h2>
        <h4>Advanced</h4>
        attendees.map((obj) =>
        <h4>Intermediate</h4>
        <h4>Beginner</h4>
        <h3>New Attendee</h3>
        <form>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Shirt Size:
              <select
              style={{ width: '100%' }}
              type="text"
              name="shirtSize"
              value={this.state.value}
              onChange={this.handleInputChange}>
                <option selected value="" disabled>Pick a size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
          </label>
          <label>
            Experience Level:
              <select
              type="text"
              name="skillLevel"
              value={this.state.value}
              onChange={this.handleInputChange}>
                <option selected value="" disabled>I am ...</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="expert">advanced</option>
              </select>
          </label>
        </form>
      </div>
    )
  }

}

export default App;
