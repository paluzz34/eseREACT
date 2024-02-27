import { Route, Routes, Link } from 'react-router-dom'
import Welcome from './Welcome'

function App() {
  const name = "User"

  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome name={name} />}></Route>
    </Routes>


    </>
  )
}

export default App