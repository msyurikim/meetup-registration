import React from 'react';
import Attendees from './attendees.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginners: [],
      intermediates: [],
      experts: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  getAttendees() {
    fetch('/attendees')
    .then((resp) => resp.json())
    .then((data) => {
      let beg = [];
      let inter = [];
      let exp = [];
      data.forEach((attendee) => {
        if (attendee.skillLevel === 'beginner') {
          beg.push(attendee);
        } else if (attendee.skillLevel === 'intermediate') {
          inter.push(attendee);
        } else {
          exp.push(attendee);
        }
      });
      this.setState({
        beginners: beg,
        intermediates: inter,
        experts: exp,
      });
    });
  }

  componentDidMount() {
    this.getAttendees();
  }

  handleSubmit(e) {
    e.preventDefault();
    let firstName = e.target[0].value;
    let lastName = e.target[1].value;
    let emailAddress = e.target[2].value;
    let shirtSize = e.target[3].value;
    let experience = e.target[4].value;

    const postReq = new XMLHttpRequest();
    postReq.open('POST', 'attendees');
    postReq.setRequestHeader('Content-Type', 'application/x-qqq-form-urlencoded');


  }

  render() {
    return(
      <div className="main">
        <form className="attendee-form" onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address Name</label>
          <input type="text" />
          <label>Shirt Size Name</label>
          <input type="text" />
          <label>Experience Level Name</label>
          <input type="text" />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
        <Attendees
          beginners={this.state.beginners}
          intermediates={this.state.intermediates}
          experts={this.state.experts} />
      </div>
    )
  }

}

export default App;
