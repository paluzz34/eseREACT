import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { Welcome } from "./Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
export function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/counter">Counter</Link>
        
        <Link to="/users">Users github List</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Chiara"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index component={<p>please select a user</p>}/>
        </Route>
          <Route  path="users/:username" element={<GithubUser /> } />
      </Routes>
    </BrowserRouter>
  );
}