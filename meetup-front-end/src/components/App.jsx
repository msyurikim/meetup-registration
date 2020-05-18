import React from 'react';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      atendees: [],
      firstName: '',
      lastName: '',
      email: '',
      shirtSize: '', // XS, S, M, L, XL, XXL
      experienceLevel: '' // beginner, intermediate, expert
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  render(){
    return (
      <div style={{ width: '50%' }}>
        <h2>New Attendee</h2>
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
              name="experienceLevel"
              value={this.state.value}
              onChange={this.handleInputChange}>
                <option selected value="" disabled>I am ...</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
              </select>
          </label>
        </form>
      </div>
    )
  }

}

export default App;
