import { useCurrentLocation } from "./component/useCurrentLocation "


function App() {
  const [position] = useCurrentLocation()

  return (
    <>
      <h1>Your Position is...</h1>
      {position ? <h2>latitude {position.latitude}</h2> : <h2>Loading</h2>}
      {position ? <h2>longitude {position.longitude}</h2> : <h2>Loading</h2>}


    </>
  )
}

export default App