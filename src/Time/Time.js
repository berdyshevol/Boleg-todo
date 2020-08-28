import React from 'react';
import './Time.css'

const Time = ({ date }) => {
    return (
        <div className="time">
            {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
        </div>
    )
}

export default Time