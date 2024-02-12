export function UncontrolledLogin() {
    function handleUncontrolledLogin(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        const session = e.target.session.checked
        const data = { username, password, session }
        console.log(data);

    }
    return (
        <form onSubmit={handleUncontrolledLogin}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="session" />
            <button>Login</button>
            <button type="reset">reset</button>
        </form>
    )
}