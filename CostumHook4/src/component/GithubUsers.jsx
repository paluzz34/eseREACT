import { useGithubUsers } from "./useGithubUsers";


export function Githubuser() {
    const [data,error, loading, getInput, handleUsername] = useGithubUsers()

    return (
        <>
            <form onSubmit={getInput}>
                <input type="text" name="username" onChange={handleUsername} />
                <button>cerca</button>
            </form>
            {
                loading ? <p>loading</p> : <h2>{data.login}</h2>
            }

        </>
    );
}