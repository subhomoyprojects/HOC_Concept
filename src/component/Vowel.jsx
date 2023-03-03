import React from 'react';
import HOC2 from './HOC2';

function Vowel(props) {
    return (
        <div>
            <h1>Vowel is run</h1>
        </div>
    );
}

export default HOC2(Vowel);