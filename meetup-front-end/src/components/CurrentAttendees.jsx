import React from 'react';
import axios from 'axios';


class CurrentAttendees extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {this.props.beginners.map((attendee, index)=>{
          return <div key={index}>{attendee.firstName} {attendee.lastName}</div>
        })}
        <h3>Intermediate</h3>
        {this.props.intermediates.map((attendee, index)=>{
          return <div key={index}>{attendee.firstName} {attendee.lastName}</div>
        })}
        <h3>Expert</h3>
        {this.props.experts.map((attendee, index)=>{
          return <div key={index}>{attendee.firstName} {attendee.lastName}</div>
        })}
      </div>
    )
  }
}


export default CurrentAttendees;




/* <div class="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        <div>Hoban Washburn</div>
        <div>Jayne Cobb</div>
        <h3>Intermediate</h3>
        <div>Zoe Washburn</div>
        <h3>Expert</h3>
        <div>Malcom Reyolds</div>
        <div>Kaylee Frye</div>
      </div> */