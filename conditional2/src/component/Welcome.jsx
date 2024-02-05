import { Age } from "./Age"

export function Welcome({ name }) {
    const myAge = 18
    return(
        <>
        <p>Welcome {name}</p>
        {myAge>18 ? <Age age={myAge}/> : "You are very young!"}
        </>
    )
}