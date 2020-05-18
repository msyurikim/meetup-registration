import React from 'react';

class Attendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginner: [],
      intermediate: [],
      expert: []
    }
  }

  componentDidMount() {
    var attendees = this.props.attendees;
    var beginner = [];
    var intermediate = [];
    var expert = [];
    for (let i = 0; i < attendees.length; i++) {
      var name = attendees[i].firstName + ' ' + attendees[i].lastName;
      if (attendees[i].skillLevel === 'beginner') {
        beginner.push(name);
      } else if (attendees[i].skillLevel === 'intermediate') {
        intermediate.push(name);
      } else if (attendees[i].skillLevel === 'expert') {
        expert.push(name);
      }
    }
    this.setState({
      beginner: beginner,
      intermediate: intermediate,
      expert: expert
    })
  }

  render() {
    if (this.state.expert.length !== 0) {
      return(
        <div className='attendees'>
          <h2>Attendees</h2>
          <h3>Beginner</h3>
          {this.state.beginner.map(name => <div key={name}>{name}</div>)}
          <h3>Intermediate</h3>
          {this.state.intermediate.map(name => <div key={name}>{name}</div>)}
          <h3>Expert</h3>
          {this.state.expert.map(name => <div key={name}>{name}</div>)}
        </div>
      );
    } else {
      return null;
    }

  }
}

export default Attendees;
