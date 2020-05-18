import React from 'react';

const Form = (props) => (
  <div className='attendee-form'>
    <h2>Register Attendee</h2>
    <form onSubmit={props.handleSubmit}>
    <label>First Name:
          <input type="text" value={props.firstName} onChange={props.handleFirstName}/>
        </label>
        <label>Last Name:
          <input type="text" value={props.lastName} onChange={props.handleLastName}></input>
        </label>
        <label>Email:
          <input type="text" value={props.email} onChange={props.handleEmail}></input>
        </label>
        <label>Shirt:
          <select value={props.shirt} onChange={props.handleShirt}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label>Skill Level:
          <select value={props.skillLevel} onChange={props.handleSkillLevel}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <button type="submit">REGISTER</button>

    </form>
  </div>
);

export default Form;
