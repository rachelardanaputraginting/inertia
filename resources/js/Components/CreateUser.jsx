import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateUser() {
    const current_state = {

        name: '',
        username: '',
        email: '',
        location: '',
        password: '',
    }

    const { data, setData, post } = useForm()

    const changeHandler = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const submitHandler = (e) => {
        e.preventDefault();
        post(route('users.store', data))
        setData(current_state);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Create new Users</div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" name="name" value={data.name} onChange={changeHandler} id="name" className="form-control" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" name="username" value={data.username} onChange={changeHandler} id="username" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" name="email" value={data.email} onChange={changeHandler} id="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="location" className="form-label">Location</label>
                                            <input type="text" name="location" value={data.location} onChange={changeHandler} id="location" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" name="password" value={data.password} onChange={changeHandler} id="password" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
