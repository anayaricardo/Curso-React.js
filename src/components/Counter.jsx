import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
        )

}

export default Counter;