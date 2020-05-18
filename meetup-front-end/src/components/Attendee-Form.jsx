import React, { useState } from 'react';
import axios from 'axios';

const AttendeeForm = (props) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userShirt, setUserShirt] = useState('');
  const [userSkillLevel, setUserSkillLevel] = useState('');

  let data = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    shirt: userShirt,
    skillLevel: userSkillLevel
  }

  sendData = (info) => {
    axios.post('/attendees', info)
      .then(() => {
        axios.get('/attendees')
          .then((data) => {props.updateList(data.data)})
    });
  }

  return(
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <label>First Name:
        <input type="text" value={userFirstName} onChange={(event) => {setUserFirstName(event.target.value)}}></input>
      </label>
      <label>Last Name:
        <input type="text" value={userLastName} onChange={(event) => {setUserLastName(event.target.value)}}></input>
      </label>
      <label>Email:
        <input type="text" value={userEmail} onChange={(event) => {setUserEmail(event.target.value)}}></input>
      </label>
      <label>Shirt Size:
        <select onChange={(event) => {setUserShirt(event.target.value)}}>
          <option value="XS">Extra Small</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
          <option value="XXL">Extra Extra Large</option>
        </select>
      </label>
      <label>Experience Level:
        <select onChange={(event) => {setUserSkillLevel(event.target.value)}}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <button >REGISTER</button>
    </div>
  )
}

export default AttendeeForm;