import React from 'react';
import Current from './Current.jsx';
import Register from './Register.jsx';
import $ from 'jquery';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      current: []
    }
  }

  componentDidMount() {
    $.ajax({
      context: this,
      method: 'GET',
      url: '/attendees',
      success: function(data) {
        this.updateAttendees(data);
      },
      error: function(err) {
        console.error(`There was an error getting data from server: ${err}`);
      }
    });
  }

  updateAttendees(data) {
    this.setState({
      current: data
    });
  }

  render() {
    return (
      <div className="main">
        <Register />
        <Current data={this.state.current} />
      </div>
    );
  }

}

export default App;
