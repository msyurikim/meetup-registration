import React from 'react';


class AttendeeForm extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.props.registration(event)}>
      <label>
          First Name:
          <input type="text" name="firstName" />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>

        <label>
          Email:
          <input type="text" name="email" />
        </label>

        <label>
          shirt:
          <input type="text" name="shirt" />
        </label>

        <label>
          Skill Level:
          <input type="text" name="skill" />
        </label>
        <input type="submit" value="Register"/>
      </form>
    </div>
    )
  }
}

export default AttendeeForm;