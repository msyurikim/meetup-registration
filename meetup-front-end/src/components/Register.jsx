import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
//*when ever the information of the form is submitted we will send that information with a post request to save it in our database

//here: axios post request inside handleCLick function

  render (){
    return (

      <div class="attendee-form">

        <h2>Register Attendee</h2>
        {//add to the form  email address, shirt size and experience level fields}
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