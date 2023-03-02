import React from 'react'
import App from '../Layouts/App'

export default function Dashboard() {
    // const name = props.name;
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Dashboard</div>
                    <div className="card-body">Halaman Dashboard</div>
                </div>
            </div>
        </>
    )
}

Dashboard.layout = (page) => <App children={page} title="Dashboard" />
