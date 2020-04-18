import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    
    return (
        <div>

            <label>
                Changez la valeur du compteur :
                <br />
                <input
                onChange = {event => setCount(Number(event.target.value))}
                name="change"
                type="text"
                />
            </label>
            <p>Le compteur est  à : {count} </p>
            <button onClick={() => setCount(count + 1)}>
            +1
            </button>
            <button onClick={() => setCount(count - 1)}>
            -1
        </button>
        </div>
    );
}

export default Counter;