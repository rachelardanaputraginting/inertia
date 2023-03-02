import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Guest({ children, title }) {
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <Head title={title}></Head>
            <div className="col-md-4">
                {children}
            </div>
        </div>
    )
}
