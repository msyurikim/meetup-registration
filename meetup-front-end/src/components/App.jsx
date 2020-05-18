import React from 'react';
import Form from './Form.jsx';
import $ from 'jquery';
import Attendees from './Attendees.jsx';


class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    attendees: [],
    newAttendee: [{
      "id": 2,
      "firstName": "",
      "lastName": "",
      "email": "",
      "shirt": "",
      "skillLevel": ""
    }]
  }

  this.handleClick = this.handleClick.bind(this);
  this.handleChangeFirst = this.handleChangeFirst.bind(this);
  this.handleChangeLast = this.handleChangeLast.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangeShirt = this.handleChangeShirt.bind(this);
  this.handleChangeExperience = this.handleChangeExperience.bind(this);
}

handleChangeFirst(e) {
  this.state.newAttendee[0].firstName = e.target.value;
}
handleChangeLast(e) {
  this.state.newAttendee[0].lastName = e.target.value;
}
handleChangeEmail(e) {
  this.state.newAttendee[0].email = e.target.value;
}
handleChangeShirt(e) {
  this.state.newAttendee[0].shirt = e.target.value;
}
handleChangeExperience(e) {
  this.state.newAttendee[0].skillLevel = e.target.value;
}

handleClick (e) {
  var thisBinding = this;
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/attendees',
    data: `${this.state.newAttendee}`,
    success: $.get('http://localhost:3000/attendees', function(Data) {
      thisBind.setState({
      attendees: Data,
      })
   }),
    dataType: 'json'
  });
}

componentDidMount() {
  var thisBind = this;
 $.get('http://localhost:3000/attendees', function(Data) {
    thisBind.setState({
    attendees: Data,
    })
 })
//  setTimeout(() => console.log(this.state.attendees), 200)
 }

render () {
  return (
    <div className="main">
    <form>
      <h2>Register Attendee</h2>
      <label>First Name:
          <input onChange={this.handleChangeFirst}type="text"></input>
        </label>
        <label>Last Name:
          <input onChange={this.handleChangeLast}type="text"></input>
        </label>
        <label>Email Address:
          <input onChange={this.handleChangeEmail} type="text"></input>
        </label>
        <label>{`Shirt Size (XS, S, M, L, XL, XXL):`}
          <input onChange={this.handleChangeShirt} type="text"></input>
        </label>
        <label>{`Experience Level (beginner, intermediate, expert)`}
          <input onChange={this.handleChangeExperience} type="text"></input>
        </label>
        <button onClick={this.handleClick}>REGISTER</button>
    </form>
    <Attendees attendees={this.state.attendees}/>
    </div>
  )
}


}



export default App;
