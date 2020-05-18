import React from 'react';

var Register = (props) => (

  <div>
    <form onSubmit={(event) => {props.register(event)} }>
        First Name:
        <input type="text" name="firstName" />
        Last Name:
        <input type="text" name="lastName" />
        Email Address:
        <input type="text" name="email" />
        Shirt Size:
        <select defaultValue="XS" name="shirt" >
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        Experience level:
        <select defaultValue="beginner" name="skillLevel" >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>

        <button type="submit">Register</button>
    </form>
  </div>

);

export default Register;
/*

- A `Register Attendee` form, which should include fields for
    - First name
    - Last name
    - Email address
    - Shirt Size (one of XS, S, M, L, XL, XXL)
    - Experience Level (one of beginner, intermediate, expert)
- A `Register` button, which when clicked, should:
    - Submit the attendee information to the server
    - Update the Current Attendees list (after the information has been accepted by the server)
*/