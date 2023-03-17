import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Register() {
    return (
        <>
            <div className="container">
                <div className="card shadow">
                    <div className="card-header">Register</div>
                    <div className="card-body">Form</div>
                    <div className="card-footer">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


Login.layout = (page) => <App children={page} title="Login" />
