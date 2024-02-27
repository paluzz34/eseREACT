import React from 'react'
import { Link } from 'react-router-dom'

function Welcome({ name }) {
    return (
        <>
            <h1>Welcome {name}</h1>
            <Link to="/Counter">Counter</Link>
        </>

    )
}

export default Welcome