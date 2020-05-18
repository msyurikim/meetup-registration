import React from 'react';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      atendees: []
    }
  }



  render(){
    return (
      <h2>New Attendee</h2>
    )
  }

}

export default App;
