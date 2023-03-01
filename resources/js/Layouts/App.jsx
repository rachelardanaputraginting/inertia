import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Navbar from '../Components/Navbar'

export default function App({ children, title }) {
    return (
        <div>
            <Head title={title}></Head>
            <Navbar />
            {children}
        </div>
    )
}
