import { useCounter } from "./useCounter";

export function Counte() {
    const {count, increment, decrement, reset}=useCounter(0)
    return(
        <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <h2>{count}</h2>
        </div>
    )
}