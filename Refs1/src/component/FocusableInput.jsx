import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export function FocusableInput() {
    const [username, setUsername] = useState("")
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    console.log(inputRef);
    return (
        <>
            <label htmlFor="username">username</label>
            <input
                ref={inputRef}
                name="username"
                value={username}
                onChange={handleUsername}
            />
        </>
    );
}