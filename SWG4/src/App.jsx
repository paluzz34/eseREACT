import GitHubUser from "./component/GitHubUser";

function App() {
    const username = "paluzz34";

    return (
        <>
            <GitHubUser username={username}></GitHubUser>
        </>
    );
}

export default App;
