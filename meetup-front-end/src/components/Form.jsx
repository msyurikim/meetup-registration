import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        shirt: '',
        skillLevel: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, event) {
    const formInfo = this.state.form;
    formInfo[name] = event.target.value;
    this.setState({
      form: formInfo
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePost(this.state.form)
  }
  render() {
    return (
      <div>
        <form className="attendee-form">
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={this.state.form.firstName}
              onChange={this.handleChange.bind(this, 'firstName')}/>
          </label>
          <label>
            Last Name:
            <input
              type='text'
              name='lastName'
              value={this.state.form.lastName}
              onChange={this.handleChange.bind(this, 'lastName')}/>
          </label>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={this.state.form.email}
              onChange={this.handleChange.bind(this, 'email')}/>
          </label>
          <label>
            Shirt Size:
            <select
              value={this.state.form.shirt}
              onChange={this.handleChange.bind(this, 'shirt')}>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </label>
          <label>
            Experience:
            <select
              value={this.state.form.skillLevel}
              onChange={this.handleChange.bind(this, 'skillLevel')}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
          <button className='submitForm' onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;