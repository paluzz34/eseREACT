import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    let refCount = useRef(false);
    function handleUpCount() {
        setCount((c) => c + 1);
    }
    function handleDownCount() {
        setCount((c) => c - 1);
    }
    useEffect(() => {
        if (initialValue < count) {
            refCount.current = true;
            console.log("down");
        } else if (initialValue > count) {
            refCount.current = false;
            console.log("up");
        } else {
            console.log("valore uguale al valore iniziale");
        }
    }, [count]);
    return (
        <>
            <h2 ref={refCount}>counter: {count}</h2>
            <button onClick={handleUpCount}>up</button>
            <button onClick={handleDownCount}>down</button>
        </>
    );
}