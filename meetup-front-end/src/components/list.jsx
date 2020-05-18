import React from 'react';
import axios from 'axios';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      attendees: undefined || [],
    };
    this.getAttendees = this.getAttendees.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
    .then((result) => {
      this.setState({
        attendees: result
      });
    }).then(() => console.log(this.state));
  }

  render() {

    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        <div>Hoban Washburn</div>
        <div>Jayne Cobb</div>
        <h3>Intermediate</h3>
        <div>Zoe Washburn</div>
        <h3>Expert</h3>
        <div>Malcom Reyolds</div>
        <div>Kaylee Frye</div>
      </div>
    );

  }
}

export default List;
