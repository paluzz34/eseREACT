import { useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    function IncrementCount() {
        setCount((c) => c + 1);
    }
    useEffect(() => {
        console.log(count);
    }, [count])
    return (
        <>
            <button onClick={IncrementCount}>incrementa</button>
            <h2>{count}</h2>
        </>
    );
}