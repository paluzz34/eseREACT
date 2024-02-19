import { useState } from "react"

export function TodoList(){
    const [list , setList] = useState([]) 
    const [input , setInput] = useState('')
    
    function handleInput(e){     
        let value = e.target.value 
        setInput(value)
        
    }
    
    function handleToDo(){    
        setList((e) =>[...e , input]) 
        setInput('') 
    }
    console.log(input); 
    console.log(list); 
    return (
        <>
            <h2>La mia lista</h2>
            <input name='list' onChange={handleInput} value={input}/> 
            <button onClick={handleToDo}>Add to do</button>
            <ul>
                {list.map(( item , index) => (  
                <li key={index}>{item}</li> 
                ))}
            </ul>
        </>
    )
}