import { useState } from "react";

export function useGitHubUsers() {
    const [username, setUsername] = useState(null);
    const [data, setData] = useState([]);

    async function fecthData() {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const datauser = await res.json();
            setData(datauser);
            console.log(datauser)
        } catch (error) {
            console.error(error);
        }
    }
    function handleUsername(e) {
        setUsername(e.target.value);
    }
    function getInput(e) {
        e.preventDefault();
        fecthData();
        console.log(username)
    }

    return [data, getInput, handleUsername];
}