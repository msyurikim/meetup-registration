import React from 'react';


class Attendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {this.props.attendees.map((el) => {
          if (el.skillLevel === 'beginner') {
            return <div className="attendees-name" >{el.firstName} {el.lastName}</div>;
          }
        })}
        <h3>Intermediate</h3>
        {this.props.attendees.map((el) => {
          if (el.skillLevel === 'intermediate') {
            return <div className="attendees-name">{el.firstName} {el.lastName}</div>;
          }
        })}
        <h3>Expert</h3>
        {this.props.attendees.map((el) => {
          if (el.skillLevel === 'expert') {
            return <div className="attendees-name">{el.firstName} {el.lastName}</div>;
          }
        })}
    </div>
    )
  }
}

export default Attendees;
