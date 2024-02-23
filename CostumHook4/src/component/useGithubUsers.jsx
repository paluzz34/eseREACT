import { useEffect, useState } from "react";

export function useGithubUsers() {
    const [username, setUsername] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([]);

    async function fecthData() {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`https://api.gitub.com/users/${username}`);
            const datauser = await res.json();
            setData(datauser);

        } catch (error) {
            setError(error)
            console.log("errore" + error)
        }
        finally {
            setLoading(false)
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

    return [data, error, loading, getInput, handleUsername];
}