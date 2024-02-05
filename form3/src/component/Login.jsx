import { useState } from "react"
export function Login({ onLogin }) {
    const [data, setData] = useState({
        username: "",
        password: "",
        rememberme: false
    })
    const isLoginDisabled = !data.username || !data.password;

    function handleDataInput(e) {
        const name = e.target.name
        const value = e.target.value
        const type = e.target.type
        const checked = e.target.checked
        setData((data) => {
            return {
                ...data,
                [name]: type == "checkbox" ? checked : value,
            };

        })

    }
    function handleLogin() {
        onLogin(data)
    }
    return (
        <div className="container">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleDataInput}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleDataInput}
            />
            <label htmlFor="rememberme"></label>
            <input
                className="checkbox-cont"
                type="checkbox"
                name="rememberme"
                value={data.rememberme}
                onChange={handleDataInput}
            />
            <button disabled={isLoginDisabled} onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}