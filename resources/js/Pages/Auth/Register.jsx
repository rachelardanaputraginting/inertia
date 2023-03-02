import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Register() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">Form</div>
                    <div className="card-footer">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </Guest>
    )
}


Login.layout = (page) => <App children={page} title="Login" />
