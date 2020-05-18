import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import AttendeeList from './AttendeeList.jsx';
import axios from 'axios';


class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        beginner: [],
        intermediate: [],
        expert: [],
        all: [],
    }
}

getAttendees () {
    axios.get('/attendees')
      .then(response => {
          let beginner = [];
          let inter = [];
          let expert = [];
          for (var i = 0; i < response.data.length; i ++) {
              let attendee = response.data[i];
              if(attendee.skillLevel === "beginner") {
                  beginner.push(attendee);
              } else if (attendee.skillLevel === "intermediate") {
                  inter.push(attendee);
              } else {
                  expert.push(attendee);
              }
              }
              this.setState({
                  beginner: beginner,
                  intermediate: inter,
                  expert: expert,
              })
          })
      }


componentDidMount() {
    this.getAttendees();
}


render () {
    return (
        <div className="main">
            <RegisterForm />
            <AttendeeList />
        </div>
    )
}
}

export default App;
