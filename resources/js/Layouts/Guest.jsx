import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Guest({ children, title }) {
    return (
        <div>
            <Head title={title}></Head>
            {children}
        </div>
    )
}
