
import {Age} from './Age'

function App() {
    const Jhon={
        name:'john',
        age:64
    }
    return(
        <>
        {Jhon.age >= 18 ? <Age age={Jhon.age}/> :<h2> maggiorenne +18</h2>}
        {Jhon.age && <Age age={Jhon.age} />}
        {Jhon.age > 18 && Jhon.age <65 && <Age age={Jhon.age +" age è maggiore di 18 e minore di 65"}/>}
        {Jhon.age > 18 && Jhon.age < 65 && Jhon.name=="john" && <Age age={Jhon.age +" age è maggiore di 18 e minore di 65 e  l'oggetto è uguale "}/>}
        </> 
    )
}
export default App