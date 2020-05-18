import React from 'react';
import axios from 'axios';
import Form from './Form.jsx'
import Attendees from './Attendees.jsx'


class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);

    this.state = {
      attendees: [],
    }
    this.handlePost = this.handlePost.bind(this)
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
    .then(res => {
      console.log('res: ', res.data);
      this.setState({
        attendees: res.data
      })
    })
    .catch(err => {
      console.error('get error', err)
    })
  }

  handlePost(form) {
    axios.post('/attendees', form)
    .then(res => {
      this.setState(prevState => {
        attendees: prevState.attendees.concat(res.data)
      })
    })
    .catch(err => {
      return console.err('error axios',err)
    })
  }
  render () {
    return (
      <div>
        <div>
          <Attendees attendees={this.state.attendees} />
        </div>
        <div>
          <Form handlePost={this.handlePost}/>
        </div>
      </div>
    )
  }
}

export default App;
