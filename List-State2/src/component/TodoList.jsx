import { useState } from "react"

export function TodoList(){
    const [list , setList] = useState([]) 
    const [input , setInput] = useState('')
    
    function handleInput(e){     
        let value = e.target.value 
        setInput(value)
        
    }
    
    function handleTodo(){    
        setList((e) =>[...e , input]) 
        setInput('') 
    }
    
    function handleReset(){
        setList([])
    }

    console.log(list);

    return (
        <>
            <h2>La mia lista</h2>
            <input name='list' onChange={handleInput} value={input}/> 
            <button onClick={handleTodo}>Add to do</button>
            <button onClick={handleReset}>Reset list</button>
            <ul>
                {list.map(( item , index) => (  
                <li key={index}>{item}</li> 
                ))}
            </ul>
        </>
    )
}