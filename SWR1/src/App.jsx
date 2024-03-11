import GitHubUser from "./component/GitHubUser";

function App() {
  const username = "Giorgio";

  return (
    <>
      <GitHubUser username={username}/>
    </>
  );
}

export default App;
