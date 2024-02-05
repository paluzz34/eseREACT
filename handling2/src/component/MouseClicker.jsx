import "./MouseClicker.css"

export function MouseClicker() {
    function handleClick(e) {
        console.log(e.target.baseURI);
        console.log(e.target.name);
    }
    return (
        <>

            <button onClick={handleClick} name="one">
                cliccami
                <img
                    src="https://i.pinimg.com/originals/60/12/18/6012181a71d406747ec3bf74585efe6e.jpg"
                />
            </button>

        </>
    );
}