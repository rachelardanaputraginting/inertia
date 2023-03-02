import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import App from '../../Layouts/App'
import Guest from '../../Layouts/Guest'

export default function Login({ errors }) {

    const [values, setValues] = useState({
        email: '', password: '', remember: ''
    })

    const changeHandler = (e) => setValues({
        ...values,
        [e.target.id]: e.target.value
    });

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(values);
        Inertia.post('/login', values);
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={submitHandler} noValidate>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" name='email' id='email' value={values.email} onChange={changeHandler} className="form-control" />
                                {errors && (<div className="mt-1 text-danger">{errors.email}</div>)}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Email</label>
                                <input type="text" name='password' id='password' value={values.password} onChange={changeHandler} className="form-control" />
                                {errors && (<div className="mt-1 text-danger">{errors.password}</div>)}
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" className='form-check-input' value={values.remember} onChange={(e) => setValues({ ...values, remember: e.target.checked })} name="remember" id="remember" />
                                <label htmlFor="password" className="ms-2 form-label" > Remember Me</label>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <Link href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.layout = (page) => <Guest children={page} title="Login" />
