import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  
  render (){
    return (

      <div class="attendee-form">

        <h2>Register Attendee</h2>
          <form>
            <label>First Name:
               <input type="text"></input>
            </label>

            <label>Last Name:
              <input type="text"></input>
            </label>
          </form>

        <button onClick={this.handleClick}>REGISTER</button>
      </div>

    )
  }

  export default Register;