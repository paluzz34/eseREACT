import { Counter } from "./component/Counter";
import { GitHubUser } from "./component/GitHubUser"
import { Welcome } from "./component/Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { PageNotFound } from "./component/PageNotFound";
import { GitHubUserList } from "./component/GitHubUserList"
export function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/counter">Counter</Link>
        
        <Link to="/users">Users github List</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"chiara"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GitHubUserList />}>
          <Route index element={<p>inserisci uno username</p>}/>
          <Route  path="users/:username" element={<GitHubUser/> } />
        </Route>
          
        
          
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}      // esercizi 5 6 7 li ho fatti tutti insieme qui