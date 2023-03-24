import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Login({ errors }) {

    const { data, setData, post } = useForm({
        email: 'margie10@example.net', password: 'password', remember: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('login'), data);
    }

    const changeHandler = (e) => setData({
        ...data,
        [e.target.id]: e.target.value
    });

    return (
        <>
            <div className="container">
                <div className="card shadow">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={submitHandler} noValidate>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" name='email' id='email' value={data.email} onChange={changeHandler} className="form-control" />
                                {errors && (<div className="mt-1 text-danger">{errors.email}</div>)}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="text" name='password' id='password' value={data.password} onChange={changeHandler} className="form-control" />
                                {errors && (<div className="mt-1 text-danger">{errors.password}</div>)}
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" className='form-check-input' value={data.remember} onChange={(e) => setData({ ...values, remember: e.target.checked })} name="remember" id="remember" />
                                <label htmlFor="password" className="ms-2 form-label" > Remember Me</label>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <span className='text-muted'>
                            Does'nt have an account  ?
                        </span> <Link href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.layout = (page) => <Guest children={page} title="Login" />
