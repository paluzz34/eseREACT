import { useState } from "react";
export function Login({ }) {  //Queste proprietà rappresentano i dati del form.
    const [data, setData] = useState({
        userName: "",
        password: "",
        checkBox: false,
    });
    function handleDataInput(e) {  //La funzione handleDataInput viene chiamata ogni volta che uno degli input cambia. 
        const name = e.target.name;       // Questa funzione riceve l'evento e come parametro 
         const value = e.target.value     // e utilizza e.target per ottenere informazioni sull'elemento che ha scatenato l'evento
        const checked = e.target.checked 
        const type = e.target.type
        console.log(value);
        setData((data) => {
            return {
                ...data,
                [name]: type == "checkbox" ? checked : value
            };
        });
    }

    return (
        
        <div>
            <label htmlFor="userName">Username:</label>
            <input name="userName" value={data.userName} onChange={handleDataInput} />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleDataInput}  //Ogni input è collegato allo stato e all'evento onChange per gestire le modifiche.
            />
            <input type="checkbox" name="rememberMe" value={data.checkBox} onChange={handleDataInput} />
        </div>
    );
}  // Gli input sono controllati, il che significa che il loro stato è gestito da React attraverso la funzione handleDataInput, che aggiorna lo stato ogni volta che uno degli input cambia.