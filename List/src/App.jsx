
import { Colors } from './component/Colors';


function App() {
const colors = [
  { name: `blue`, id: 1 },
  { name: `black`, id: 2 },
  {name:`white`, id:3},
];

  return (
    <>
      <Colors colors={colors}></Colors>
    </>
  );
}

export default App
