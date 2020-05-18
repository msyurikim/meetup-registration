import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';


class App extends React.Component {
  render() {

    return (
    <div className='main'>
      <Form />
      <List />
    </div>
    )
  }

}

export default App;
