import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            // console.log(date.toLocaleTimeString())
            setDate(new Date())
            // console.log(date)
        }, 1000);
        return () => {
            clearInterval(intervalID)
            console.log(date.toLocaleTimeString());
        }
    }, []);

    return (
        <>
            <div className="clock-container">
                <h2 className="clock-content">current time <br />{date.toLocaleTimeString()}</h2>
            </div>
        </>
    );
}