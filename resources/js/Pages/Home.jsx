import React from 'react'
import App from '../Layouts/App'

export default function Home({ name }) {
    // const name = props.name;
    return (
        <App title="Home">
            <h2>Halaman Home</h2>
            <p>Halo, {name}</p>
        </App>
    )
}
