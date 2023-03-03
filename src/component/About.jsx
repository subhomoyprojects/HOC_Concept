import React from 'react';
import HOC from './HOC';


function About(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
        </div>
    );
}

export default HOC(About);