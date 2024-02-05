export function AlertClock() {
    function time() {
        const date = new Date();
        alert(date.toLocaleTimeString());
    }
    return (
        <button onClick={time}>che ore sono?</button>
    )
}