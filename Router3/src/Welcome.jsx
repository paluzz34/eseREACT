import "./Welcome"
export function Welcome({name}) {
    return (
    <div className="welcome-container">
        <h2 className="welcome">Welcome, {name}</h2>
    </div>
    )
}