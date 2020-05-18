import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import AttendeeList from './AttendeeList.jsx';
import AttendeeForm from './AttendeeForm.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor (props) {
    super(props);
    this.state = {
      attendees: [],
    };
    this.postAttendee = this.postAttendee.bind(this);
  }


  componentDidMount() {
    this.getAttendees();
  }

  postAttendee(event) {
    event.preventDefault();
    var newAttendee = {
      //'id': this.state.attendees.length + 1,
      'firstName': event.target[0].value,
      'lastName': event.target[1].value,
      'email': event.target[2].value,
      'shirt': event.target[3].value,
      'skillLevel': event.target[4].value
    }
    console.log(newAttendee)
    $.ajax({
      type: 'POST',
      url: "/attendees",
      data: newAttendee
    }).then(() => {
      var flName = '';
      flName += newAttendee.firstName;
      flName += ' ';
      flName += newAttendee.lastName;
      var storage = this.state.attendees;
      storage.push(flName);
      this.setState({
        attendees: storage
      })
  })
}

  getAttendees() {
    $.ajax({
      type: 'GET',
      url: '/attendees'
    }).done((data) => {
        console.log(data);
        var storage = [];
        for (var i = 0; i < data.length; i++) {
          var flName = '';
          flName += data[i].firstName;
          flName += ' ';
          flName += data[i].lastName;
          storage.push(flName);
        }
        this.setState({
          attendees: storage
        });
      });
}

  render() {
    return (
      <div>
        <AttendeeForm registration = {this.postAttendee} />
        <AttendeeList aList = {this.state.attendees} />
      </div>
    );
  }




}

export default App;
