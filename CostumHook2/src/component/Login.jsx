import { FormLog } from "./FormLog"

export function Login() {
    const [data, cards, handleData, submitData] = FormLog()

    return (
        <form onSubmit={submitData}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleData}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleData}
            />

            <button>
                Login
            </button>
            <p>username: {cards.username}</p>
            <p>Password: {cards.password}</p>
        </form>
    )
}