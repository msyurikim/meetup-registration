import React from 'react';

class AttendeesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: ''
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setShirt = this.setShirt.bind(this);
    this.setSkill = this.setSkill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setFirstName (e) {
    let newFN = e.target.value;
    this.setState({
      firstName: newFN,
    });
  }

  setLastName (e) {
    let newLN = e.target.value;
    this.setState({
      lastName: newLN,
    });
  }

  setEmail (e) {
    let newEmail = e.target.value;
    this.setState({
      email: newEmail,
    });
  }

  setShirt (e) {
    let newShirt = e.target.value;
    this.setState({
      shirt: newShirt,
    });
  }

  setSkill (e) {
    let newSkill = e.target.value;
    this.setState({
      skillLevel: newSkill,
    });
  }

  handleSubmit () {
    this.props.handleAdd(this.state);
  }

  render () {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange={this.setFirstName}></input>
        </label>
        <label>Last Name:
          <input type="text" onChange={this.setLastName}></input>
        </label>
        <label>Email Address:
          <input type="email" onChange={this.setEmail}></input>
        </label>
        <form onChange={this.setShirt}>Shirt Size:
          <input type="radio" id="XS" name="shirt size" value ="XS" />
          <label htmlFor="XS">XS</label><br />
          <input type="radio" id="S" name="shirt size" value ="S" />
          <label htmlFor="S">S</label><br />
          <input type="radio" id="M" name="shirt size" value ="M" />
          <label htmlFor="M">M</label><br />
          <input type="radio" id="L" name="shirt size" value ="L" />
          <label htmlFor="L">L</label><br />
          <input type="radio" id="XL" name="shirt size" value ="XL" />
          <label htmlFor="XL">XL</label><br />
        </form>
        <form onChange={this.setSkill}>Experience Level:
          <input type="radio" id="beginner" name="experience" value ="beginner" />
          <label htmlFor="beginner">Beginner</label><br />
          <input type="radio" id="Intermediate" name="experience" value ="Intermediate" />
          <label htmlFor="Intermediate">Intermediate</label><br />
          <input type="radio" id="Expert" name="experience" value ="Expert" />
          <label htmlFor="Expert">Expert</label><br />
        </form>
        <button onClick={this.handleSubmit}>REGISTER</button>
      </div>
    );
  }
};

export default AttendeesForm;