import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import Attendees from './Attendees.jsx';
import Register from './Register.jsx';

import data from '../../db.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAttendees: [],
    };
  };

  // MOUNTED
  componentDidMount() {
    console.log('componentDidMount()');
    this.getCurrent();

  }

  // GET LIST OF ATTENDEES
  getCurrent() {

    axios.get('http://localhost:3000/attendees')
    .then((response) => {

        var data = response.data;

        // data.forEach((element) => {
        //     console.log(element);
        // });

        this.setState({ currentAttendees: data });
    })
    .catch((error) => {
        console.log('ERROR');
        console.log(error);
    });

  }

  // REGISTER NEW ATTENDEE
  register(event) {
    event.preventDefault();
    console.log('register');

    var nextID = this.state.currentAttendees.length + 1;

    var insert = {
      id: nextID,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      shirt: event.target.shirt.value,
      skillLevel: event.target.skillLevel.value,
    };

    console.log(insert);

    axios.post('http://localhost:3000/attendees', insert)
    .then((response) => {

        console.log(response);
        this.getCurrent();

    })
    .catch((error) => {
        console.log('ERROR');
        console.log(error);
    });


  }

  render () {
    return (
      <div>
      <Register register={this.register.bind(this)} />
      <Attendees currentAttendees={this.state.currentAttendees} />
      </div>
    );
  }
}

export default App;

