import React from 'react';
import req from '../utility/request.js';

class Attendees extends React.Component {
// YOUR CODE HERE
  constructor(props){
    super(props);
    this.state = {
      expert:[],
      beginner:[],
      intermediate:[]
    }
  }
  componentDidMount(){
    var beginner = [];
    var expert = [];
    var intermediate = [];

    req.get(({data}) => {
      data.forEach(d => {
        if(d.skillLevel === 'beginner'){
          beginner.push(d);
        } else if(d.skillLevel === 'expert'){
          expert.push(d);
        } else {
          intermediate.push(d);
        }
      });
      this.setState({
        expert:expert,
        beginner:beginner,
        intermediate:intermediate
      });
    });
  }
  render(){
    return(
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {this.state.beginner.map((data) => {
          return <div>{data.firstName+' '+data.lastName}</div>
        })}
        <h3>Intermediate</h3>
        {this.state.intermediate.map((data) => {
          return <div>{data.firstName+' '+data.lastName}</div>
        })}
        <h3>Expert</h3>
        {this.state.expert.map((data) => {
          return <div>{data.firstName+' '+data.lastName}</div>
        })}
      </div>
    );
  }
}

export default Attendees;
