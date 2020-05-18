import React from 'react';

class Attendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {this.props.attendees.map((item, key) => {
        if (item.skillLevel === 'beginner') {
          return (<div key={key}>{`${item.firstName} ${item.lastName}`}</div>)
        }
      })}
      <h3>Intermediate</h3>
      {this.props.attendees.map((item, key) => {
        if (item.skillLevel === 'intermediate') {
          return (<div key={key}>{`${item.firstName} ${item.lastName}`}</div>)
        }
      })}
      <h3>Expert</h3>
      {this.props.attendees.map((item, key) => {
        if (item.skillLevel === 'expert') {
          return (<div key={key}>{`${item.firstName} ${item.lastName}`}</div>)
        }
      })}
    </div>
    );
  }
}

export default Attendees;
