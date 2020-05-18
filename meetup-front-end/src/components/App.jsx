import React from 'react';
import Form from './form.jsx';
import List from './list.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {
    return(
      <div>
        <Form />
        <List />
      </div>
    )
  }

}

export default App;
