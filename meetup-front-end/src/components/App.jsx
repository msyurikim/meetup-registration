import React from 'react';
import Attendees from './AttendeesComponent.jsx';
import Form from'./FormComponent.jsx';
import request from '../utility/request.js';

class App extends React.Component {
// YOUR CODE HERE
  constructor(props){
    super(props);
    this.state = {
      first:'',
      last:'',
      email:'',
      shirt:'',
      level:''
    }
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  submit(){
    request.post(() => {
      this.setState({
        first:'',
        last:'',
        email:'',
        shirt:'',
        level:''
      })
    },{
      firstName: this.state.first,
      lastName: this.state.last,
      email: this.state.email,
      shirt: this.state.shirt,
      skillLevel: this.state.level
    });
  }
  render(){
    return(
      <div className="main">
      <Form change={this.onChange} shirt={this.state.shirt} level={this.state.level} first={this.state.first} last={this.state.last}email={this.state.email} submit={this.submit}/>
      <Attendees/>
    </div>
    );
  }
}

export default App;
