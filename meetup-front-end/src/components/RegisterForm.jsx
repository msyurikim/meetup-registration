import React from 'react';

function RegisterForm() {
    return (
        <div className="attendee-form">
            <h2>Register Attendees</h2>
            <label>First Name: 
                <input type="text"></input>
            </label>
            <label>Last Name: 
                <input type="text"></input>
            </label>
            <label>Email Address: 
                <input type="text"></input>
            </label>
            <label>Shirt Size: 
                <input type="text"></input>
            </label>
            <label>Experience Level: 
                <input type="text"></input>
            </label>
            <button>REGISTER</button>
        </div>
    )
}

export default RegisterForm;