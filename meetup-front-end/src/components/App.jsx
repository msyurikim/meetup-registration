import React from 'react';
import CurrentList from './CurrentList.jsx';
import Registration from './Registration.jsx';
import axios from 'axios';


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/attendees')
      .then((response) => {
        this.setState({
          attendees:response.data
        })
      })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
      // .finally(function () {
      //   // always executed
      // });
  }

  clickHandler() {
    console.log(form[0])
  }

  render () {
    return (
      <div>
        <Registration clickHandler={this.clickHandler} />
        <CurrentList attendees={this.state.attendees} />
      </div>
    )
  }
}


export default App;
