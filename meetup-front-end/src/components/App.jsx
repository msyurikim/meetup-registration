import React from 'react';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  getAttendees() {
    axios.get('/attendees')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAttendees();
  }



  render() {
    return(
      <div>Hello World!</div>
    );
  }

}

export default App;
