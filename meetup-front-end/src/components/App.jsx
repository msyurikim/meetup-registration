import React from 'react';
import axios from 'axios';
import AttendeeCategory from './AttendeeCategory.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      experience: '',
      attendees: [],
      groups: ['Beginner', 'Intermediate', 'Expert']
    };
    // this.changeFirst = this.changeFirst.bind(this);
    // this.changeLast = this.changeLast.bind(this);
    // this.changeEmail = this.changeEmail.bind(this);
    // this.changeShirt = this.changeShirt.bind(this);
    // this.changeXP = this.changeXP.bind(this);
  }

  componentDidMount() {
    this.retrieve();
  }

  retrieve() {
    axios.get('/attendees')
      .then(({ data }) => {
        console.log(data);
        this.setState((prevState, props) => {
          return { attendees: data };
        });
      })
      .catch((err) => {
        console.log('Fetch error:', err);
      });
  }

  post(data) {
    axios.post('/attendees', {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  render() {
    const { firstName, lastName, email, shirt, experience, attendees, groups } = this.state;
    return (
      <div className="attendees">
        <h2>
          Attendees
        </h2>
       {groups.map((skill) => {
         return (
           <AttendeeCategory group={skill} attendees={attendees} />
         );
       })}
      </div>
    )
  }
}

export default App;
