import React from 'react';
import Attendees from './Attendees.jsx';
import Register from './Register.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beginner: [],
      intermediate: [],
      expert: [],
    }

    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    this.handleDataUpdate();
  }

  handleDataUpdate() {
    $.ajax({
      url: '/attendees',
      method: 'GET',
      success: (data) => {
        console.log('success!!')
        this.handleData(data);
      },
      error: (err) => {
        console.error("We had an error: ", err);
      }
    })
  }

  handleRegister(data) {
    $.ajax({
      url: '/attendees',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: () => {
        this.handleDataUpdate();
      },
      error: (err) => {
        console.error("We had an error: ", err);
      }
    })
  }

  handleData(list) {
    var beginner = [];
    var inter = [];
    var exp = [];

    list.forEach((item) => {
      if (item.skillLevel === 'beginner') {
        beginner.push(item);
      } else if (item.skillLevel === 'intermediate') {
        inter.push(item);
      } else if (item.skillLevel === 'expert') {
        exp.push(item);
      }
    })
    this.setState({
      beginner: beginner,
      intermediate: inter,
      expert: exp,
    })
  }



  render () {
    return (
      <div className="main">
      <Register
      handleRegister={this.handleRegister}
      />
      <Attendees
      beginner={this.state.beginner}
      intermediate={this.state.intermediate}
      expert={this.state.expert}
      />
    </div>
    )
  }
}

export default App;
