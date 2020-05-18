import React from 'react';
import AttListEntry from './AttListEntry.jsx';
import InterList from './InterList.jsx';
import ExpertList from './ExpertList.jsx';

function AttendeeList ({beginners, inters, experts}) {
    return (
        <div className="attendees">
                <h2>Attendees</h2>
                <h3>Beginner</h3>
                {beginners.map((attendee, index) => 
                    <AttListEntry beginner={attendee} key={index} />
                )}
                <h3>Intermediate</h3>
                {inters.map((att, index) => 
                <InterList intermediate={att} key = {index + 5} />
                )}
                <h3>Expert</h3>
                {experts.map((atten, index) => 
                <ExpertList expert={atten} key = {index + 10} />
                )}
                
            </div>
    )
}

export default AttendeeList;