import React from 'react';

function AttListEntry ({beginner, intermediate}) {
    return (
        <div>
            {beginner.firstName + " " + beginner.lastName}
        </div>
    )
}

export default AttListEntry;