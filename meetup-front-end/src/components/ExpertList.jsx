import React from 'react';

function ExpertList ({expert}) {
    return (
        <div>
            {expert.firstName + " " + expert.lastName}
        </div>
    )
}

export default ExpertList;