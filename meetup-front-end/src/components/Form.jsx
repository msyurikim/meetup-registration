import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render () {
    return (
      <form>
      <h2>Register Attendee</h2>
      <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email Address:
          <input type="text"></input>
        </label>
        <label>{`Shirt Size (XS, S, M, L, XL, XXL):`}
          <input type="text"></input>
        </label>
        <label>{`Experience Level (beginner, intermediate, expert)`}
          <input type="text"></input>
        </label>
        <button>REGISTER</button>
    </form>
    )
  }


}

export default Form;