import { useState } from "react";

export function Counter({ startCounter = 0  }) {
const [count, setCount] = useState(startCounter);

function CounterIncrement() {
    setCount((c)=>c + 1)
}
return (
    <>
    <h2>il numero è {count}</h2>
    <button onClick={CounterIncrement}>Incrementa</button>
    </>
);
}