
export function GitHubUser({user}) {
  
   
    return (
      <>
        <h2>username {user.login}</h2>
        <img src={user.avatar_url} alt="" />
      </>
    );
  }