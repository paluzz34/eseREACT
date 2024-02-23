import { useState } from "react";

export function useCounter(startValue = 0) {
    const [count, setCount] = useState(startValue);


    function increment() {
        setCount((c) => c + 1);
    }
    function decrement() {
        setCount((c) => c - 1)
    }
    function reset() {
        setCount(startValue)
    }

    return { count, increment, decrement, reset }
}