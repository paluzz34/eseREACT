
export function UncontrolledLogin() {

    function handleUncontrolledLogin(e) {
        e.preventDefault()
        const formData = new FormData(e.target);

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") == "on" ? true : false
        };
        console.log(data);

    }

    return (
        <form onSubmit={handleUncontrolledLogin}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="session" />
            <button>Login</button>
            <button type="reset">reset</button>
            <p>{ }</p>
        </form>
    );
}