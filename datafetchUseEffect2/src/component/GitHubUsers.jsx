import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState()

    async function fecthData(e) {
        e.preventDefault();
        const res = await fetch(`https://api.github.com/users/${username}`);
        const datauser = await res.json();
        setData(datauser);
    }
    return (
        <>
            <form onSubmit={fecthData}>
                <label htmlFor="gitubInput">username</label>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button>search</button>
            </form>
            <GitHubUser user={data} />
        </>
    );
}