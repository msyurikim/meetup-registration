import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super (props);
  }

  // - Email address
  //   - Shirt Size (one of XS, S, M, L, XL, XXL)
  //   - Experience Level (one of beginner, intermediate, expert)

  render() {
    return (
      <div className="attendee-form">
      {/* <!-- NOTE: This does not contain all required fields. --> */}
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
        <label>Shirt Size:
        <select className="signupSelectors" id="shirtsizes">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        </label>
        <label>Experience Level:
          <select className="signupSelectors" id="experiencelevel">
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </label>
        <button>REGISTER</button>
      </div>
    );
  }
}

export default Form;


