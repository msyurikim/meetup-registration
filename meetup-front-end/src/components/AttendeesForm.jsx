import React from 'react';

class AttendeesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render () {
    return (
      <div class="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text"></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email Address:
          <input type="email"></input>
        </label>
        <form>Shirt Size:
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
        <form>Experience Level:
          <input type="radio" id="beginner" name="experience" value ="beginner" />
          <label htmlFor="beginner">Beginner</label><br />
          <input type="radio" id="Intermediate" name="experience" value ="Intermediate" />
          <label htmlFor="Intermediate">Intermediate</label><br />
          <input type="radio" id="Expert" name="experience" value ="Expert" />
          <label htmlFor="Expert">Expert</label><br />
        </form>
        <button>REGISTER</button>
      </div>
    );
  }
};

export default AttendeesForm;