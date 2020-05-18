import React from "react";
import axios from "axios";
import RegisterationForm from "./sub-components/RegistrationForm.jsx";
import AttendeeList from "./sub-components/AttendeeList.jsx";

class App extends React.Component {
  // YOUR CODE HERE
  constructor() {
    super();
    this.state = {
      attendees: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/attendees")
      .then((response) => {
        this.setState({
          attendees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(data) {
    const { firstName, lastName, email, shirt, skillLevel } = data;
    axios
      .post("/attendees", {
        firstName,
        lastName,
        email,
        shirt,
        skillLevel,
      })
      .then((response) => {
        return response.data;
      })
      .then((newAtt) => {
        this.setState({
          attendees: [...this.state.attendees, newAtt],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main">
        <RegisterationForm handleSubmit={this.handleSubmit} />
        <AttendeeList attendees={this.state.attendees} data={this.state.data} />
      </div>
    );
  }
}

export default App;
