import React from 'react';
import $ from 'jquery';
import AttendeeListItem from './AttendeeListItem.jsx';
import Form from './Form.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: null,
    };
  }

  componentDidMount() {
    $.get('/attendees?_sort=skillLevel')
      .done(data => {
        console.log(data);
        this.setState({ attendees: data});
      })
      .fail(err=>console.log('There was a problem!'))
  }

  render() {
    const { attendees } = this.state;
    if (attendees) {
    return (
      <div className="main">
        <Form />
        <div className="attendees">
          <h2>Attendees</h2>
          <h3>Beginner</h3>
          {attendees.map(person => (<AttendeeListItem
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            desiredSkill={'beginner'}
            skillLevel={person.skillLevel} />))}
          <h3>Intermediate</h3>
          {attendees.map(person => (<AttendeeListItem
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            desiredSkill={'intermediate'}
            skillLevel={person.skillLevel} />))}
          <h3>Expert</h3>
          {attendees.map(person => (<AttendeeListItem
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            desiredSkill={'expert'}
            skillLevel={person.skillLevel} />))}
        </div>
      </div>
    );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default App;
