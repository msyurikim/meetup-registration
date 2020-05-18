import React from 'react';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginners: [],
      intermediates: [],
      experts: []
    }

  }

  render (){
    const list = this.props.list;
    const beginners = this.beginners;
    const intermediates = this.intermediates;
    const experts = this.experts;

    {list.map(attendee => (
        if (attendee.skillLevel === 'beginner') {
        beginners.push(attendee)
        }

      )
    )}

    return (

    <div class="attendees">
        <h2>Attendees</h2>

        <h3>Beginner</h3>
        <div>
          {beginners.map( person => (
             <div>{person.firstName} {person.lastName}</div>
            )
          )}
        </div>


        <h3>Intermediate</h3>
        <div>
          {intermediates.map( person => (
             <div>{person.firstName} {person.lastName}</div>
             )
          )}
        </div>

        <h3>Expert</h3>
          <div>
            {experts.map( person => (
              <div>{person.firstName} {person.lastName}</div>
              )
            )}
        </div>

      </div>

    )
  }
}

export default List;