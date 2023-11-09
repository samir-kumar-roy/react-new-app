import React from 'react';
import loading from "../loading.gif"

function Loading() {
    return (
        <div className='spinner'>
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading;
