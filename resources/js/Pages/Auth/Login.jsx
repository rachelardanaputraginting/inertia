import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import App from '../../Layouts/App'
import Guest from '../../Layouts/Guest'

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="cod-md-5">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">Form</div>
                        <div className="card-footer">
                            <Link href="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.layout = (page) => <App children={page} title="Login" />
