import { useGitHubUsers } from "./GitHubUser"; 


export function Githubuser() {
    const [data, getInput, handleUsername] = useGitHubUsers()

    return (
        <>
            <form onSubmit={getInput}>
                <input type="text" name="username" onChange={handleUsername} />
                <button>cerca</button>
            </form>
            <h2>{data.login}</h2>
            <img src={data.avatar_url} alt="" />
        </>
    );
}