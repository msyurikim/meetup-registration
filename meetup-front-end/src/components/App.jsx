import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <h1>JS MEETUP</h1>
      <div id="app">
        <div class="main">
          <div class="attendee-form">
            <!-- NOTE: This does not contain all required fields. -->
            <h2>Register Attendee</h2>
            <label>First Name:
              <input type="text"></input>
            </label>
            <label>Last Name:
              <input type="text"></input>
            </label>
            <button>REGISTER</button>
          </div>
          <div class="attendees">
            <h2>Attendees</h2>
            <h3>Beginner</h3>
            <div>Hoban Washburn</div>
            <div>Jayne Cobb</div>
            <h3>Intermediate</h3>
            <div>Zoe Washburn</div>
            <h3>Expert</h3>
            <div>Malcom Reyolds</div>
            <div>Kaylee Frye</div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
