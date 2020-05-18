import React from 'react';
import axios from 'axios';
import RegisterAttendee from './RegisterAttendee.jsx';
import CurrentAttendees from './CurrentAttendees.jsx';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state  = {
      beginners: [],
      intermediates: [],
      experts: [],
    }
  }

  getAttendees(){
    axios.get('/attendees')
    .then(response =>{
      this.sort(response.data);
    })
  }

  componentDidMount(){
    this.getAttendees();
  }

  sort(attendees){
    let beginners = [];
    let intermediates = [];
    let experts = [];
    for(let attendee of attendees){
      if(attendee.skillLevel === 'beginner'){
        beginners.push(attendee);
      } else if(attendee.skillLevel === "intermediate"){
        intermediates.push(attendee);
      } else if(attendee.skillLevel === "expert"){
        experts.push(attendee);
      }
    }
    this.setState({
      beginners: beginners,
      intermediates: intermediates,
      experts: experts,
    })
  }

  render(){

    return(
      <div>
      <h1>JS MEETUP</h1>
        <div className="main">
          <CurrentAttendees beginners={this.state.beginners} intermediates={this.state.intermediates} experts={this.state.experts}/>
          <RegisterAttendee refresh={this.getAttendees.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
