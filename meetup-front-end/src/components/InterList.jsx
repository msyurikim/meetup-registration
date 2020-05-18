import React from 'react';

function InterList ({intermediate}) {
    return (
        <div>
            {intermediate.firstName + " " + intermediate.lastName}
        </div>
    )
}

export default InterList;