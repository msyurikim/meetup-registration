import React from 'react';

class Form extends React.Component {
// YOUR CODE HERE
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" value={this.props.first} name='first'onChange={this.props.change}></input>
        </label>
        <label>Last Name:
          <input type="text"value={this.props.last} name='last'onChange={this.props.change}></input>
        </label>
        <label>Email:
          <input type="email" value={this.props.email} name='email'onChange={this.props.change}></input>
        </label>
        <label>Shirt Size:
          <select value={this.props.shirt} name='shirt' onChange={this.props.change}>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </label>
        <label>Expert Level:
          <select value={this.props.level} name='level'onChange={this.props.change}>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Expert'>Expert</option>
          </select>
        </label>
        <button onClick={this.props.submit}>REGISTER</button>
      </div>
    );
  }
}

export default Form;
