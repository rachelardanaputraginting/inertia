import React from 'react'
import App from '../Layouts/App'

export default function Home({ name }) {
    // const name = props.name;
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Home</div>
                    <div className="card-body">Halo, {name}</div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Home" />
