import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h1> {count} </h1>
            <button onClick={increment}>Tambah +1</button>
            <button onClick={decrement}>Kurang -1</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
