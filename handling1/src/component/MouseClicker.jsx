export function MouseClicker() {
    const myName="one"
    function handleClick(e) {
        console.log(e.target.name);
    }
    return(
        <button onClick={handleClick} name={myName}>clicca qui</button>
    )
}