import {Clock} from "./component/Clock"
import { Container } from "./component/Container"
import { LanguageComponent } from "./component/LanguageComponent"
import { useState } from "react";


export function App() {
    const [language, setLanguage] = useState('en')

    function handleLanguage(language) {
        setLanguage(language)
    }

    return (
        <div>
            <div className="main">
                <LanguageComponent.Provider value={language}>

                    <Container title={<h1>Title</h1>}>
                        <p>figli</p>
                        <p>figli</p>
                        <p>figli</p>
                        <p>figli</p>
                    </Container>

                    <div>
                        <button onClick={() => handleLanguage('it')}>IT</button>
                        <button onClick={() => handleLanguage('en')}>EN</button>
                    </div>
                    <Clock/>

                </LanguageComponent.Provider>
            </div>
        </div>

    )

} //mi da un errore e sto diventando scema per capirlo 
