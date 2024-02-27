import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  const name = "User";

  return (
    <>
      <Routes>
        <Route path="/Welcome" element={<Welcome name={name} />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
      </Routes>
    </>
  );
}

export default App;