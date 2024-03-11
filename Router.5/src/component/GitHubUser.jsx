import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function GitHubUser() {
    const [data, setData] = useState(null);
    const { username } = useParams();

    useEffect(() => {
        async function fecthData() {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            setData(data);
        }
        fecthData();
    }, [username]);
    return (
        <>
            <div className="card">
                <img src={data && data.avatar_url} alt="" />
                <div className="card-content">
                    <h2>Name {data && data.name}</h2>
                    <p>username {data && data.login}</p>
                    <button><Link to={"/."}>retri</Link></button>
                </div>

            </div>

        </>
    );
}