import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
    }
  }

  componentDidMount() {
    var that = this;
    axios.get('/attendees')
  .then((response)=> {

    this.setState({ list: response.data})// handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }

  render (){
    return(

      <div class="main">
      <div class="attendee-form">

        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <button>REGISTER</button>
      </div>
      <List list={this.state.list}/>
    </div>

    )
  }


}

export default App;
