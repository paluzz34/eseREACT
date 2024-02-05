import { useState } from "react";

export function Login({ onLogin }) {
    const [data, setData] = useState({
        username: "",
        password: "",
        rememberme: false,
    });
    const isLoginDisabled = !data.username || !data.password;
    function handleDataInput(e) {
        //uso la destrutturazione
        const { name, value, type, checked } = e.target;
        setData((data) => {
            return {
                ...data,
                [name]: type == "checkbox" ? checked : value,
            };
        });
    }
    function handleLogin() {
        onLogin(data);
    }
    function handlereset() {
        setData({
            username: "",
            password: "",
            rememberme: false,
        });
    }

    return (
        <div>
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
                type="checkbox"
                name="rememberme"
                value={data.rememberme}
                onChange={handleDataInput}
            />
            <button disabled={isLoginDisabled} onClick={handleLogin}>
                Login
            </button>
            <button disabled={isLoginDisabled} onClick={handlereset}>
                Resetdev
            </button>
        </div>
    );
}