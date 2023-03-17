import { Head, usePage } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar'

export default function App({ children, title }) {
    const { flash } = usePage().props;
    // useEffect(() =>
    //     flash.type && toast[flash.type](flash.message), []);
    flash.type && toast[flash.type](flash.message)
    return (
        <div>
            <Head title={title}></Head>
            <Navbar />
            <div className="container">
                <Toaster
                    position='top-center' />
            </div>
            <div className="pt-4">
                {children}
            </div>
        </div>
    )
}
