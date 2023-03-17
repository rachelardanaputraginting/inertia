import React from 'react'
import App from '../Layouts/App'

export default function Home({ name }) {
    // const name = props.name;
    return (
        <>
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">Your new Inertia App</div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Home" />
