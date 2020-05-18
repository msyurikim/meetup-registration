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
        </form>
      </div>
    )
  }

}

export default App;
