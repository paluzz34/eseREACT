import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export function FocusableInput() {
    const [username, setUsername] = useState("");
    const mountRef = useRef(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) {
            mountRef.current = true
            console.log("componente montato per la prima volta");
        } else {
            console.log("componente montato di nuovo per il debug");
        }
        inputRef.current?.focus();
    }, []);
    function handleUsername(e) {
        setUsername(e.target.value);
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