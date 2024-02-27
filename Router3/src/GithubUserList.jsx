import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fecthData() {
            const res = await fetch(`https://api.github.com/users`);
            const data = await res.json();
            setData(data);
            console.log(data)
        }
        fecthData();
    }, []);
    return (
        <>
            {" "}
            <div className="card-list-container">
                {data.map((user) => (
                    <div className="card" key={user.id}>
                        <img src={user.avatar_url} alt="" />
                        <div className="card-content">
                            <p>username {user.login}</p>
                            <button><Link to={`/users/${user.login}`}>follow</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}