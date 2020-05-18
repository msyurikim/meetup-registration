import React from 'react';

const Register = (props) => {
  return (
    <div>
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
      <label>T-shirt Size:
        <select>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </label>
      <label>Experience Level:
        <select>
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="expert">expert</option>
        </select>
      </label>
      <button>REGISTER</button>
    </div>
  )
}

export default Register;