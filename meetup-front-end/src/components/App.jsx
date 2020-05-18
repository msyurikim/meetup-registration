import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: '',
    };
  }

  getAttendees() {
    fetch('/attendees', {
      method: 'GET',
      headers: {'Content-Type': 'application/json',}
    })
    .then((res) => res.json())
    .then((data) => this.setState({
      attendees: data
    }))
  }

  componentDidMount() {
    this.getAttendees();
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleShirt(e) {
    this.setState({
      shirt: e.target.value
    });
  }

  handleSkillLevel(e) {
    this.setState({
      skillLevel: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      email: this.state.email,
      shirt: this.state.shirt,
      skillLevel: this.state.skillLevel,
    };
    fetch('/attendees', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data)
    })
    .then(this.getAttendees());
  }

  render() {

    return (
    <div className='main'>
      <Form
        lastName={this.state.lastName}
        firstName={this.state.firstName}
        email={this.state.email}
        shirt={this.state.shirt}
        skillLevel={this.state.skillLevel}
        handleLastName={(e)=>this.handleLastName(e)}
        handleFirstName={(e)=>this.handleFirstName(e)}
        handleEmail={(e)=>this.handleEmail(e)}
        handleShirt={(e)=>this.handleShirt(e)}
        handleSkillLevel={(e)=>this.handleSkillLevel(e)}
        handleSubmit={(e)=>this.handleSubmit(e)}
      />
      <List attendees={this.state.attendees} />
    </div>
    )
  }

}

export default App;
