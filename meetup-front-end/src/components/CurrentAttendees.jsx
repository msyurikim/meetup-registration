// - A `Current Attendees` list, which should include first + last names of attendes, grouped by experience level (beginner, intermediate, expert)

{/*  */}

import React from 'react';

class CurrentAttendees extends React.Component {
render() {
  return (
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
  )
}
}

export default CurrentAttendees;
