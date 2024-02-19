import { useContext, useEffect, useState } from "react"
import { LanguageComponent } from "./LanguageComponent"

export function Clock() {

    const [date, setDate] = useState(new Date())

    const language = useContext(LanguageComponent)

    useEffect(() => {

        setInterval(() => {
            console.log(`Interval`);
            setDate(new Date())
        }, 1000)

    }, [])

    return (
        <div className="clock">
            {language === 'en' ? <h2>Current time is: {date.toLocaleTimeString()}</h2> : <h2>L'ora corrente è:{date.toLocaleTimeString()}</h2>}
        </div>
    )
}