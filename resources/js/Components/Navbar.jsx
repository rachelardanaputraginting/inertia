import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar(props) {
    const { auth } = usePage().props;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('home')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route('dashboard')}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route('users.index')}>Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route('posts.index')}>Posts</Link>
                            </li>
                        </ul>
                        {
                            auth.user !== null
                                ?
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth.user.name}
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Setting</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            {/* <li><button className="dropdown-item" href="/logout" onClick={() => Inertia.post('logout')}>Logout</button></li> */}
                                            <li><Link className="dropdown-item" as="button" method='post' href={route('logout')}>Logout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" href={route('login')}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href={route('register')}>Register</Link>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </nav >

        </div >
    )
}
