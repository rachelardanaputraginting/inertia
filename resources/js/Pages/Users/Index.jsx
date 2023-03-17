import App from '../../Layouts/App'
import React, { useState } from 'react'
import Pagination from '../../Components/Pagination';
import useDialog from "../../Hooks/useDialog";
import Dialog from '../../Components/Dialog';
import CreateUser from '../../Components/CreateUser';
import EditUser from '../../Components/EditUser';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {
    const { data: users, links, from } = props.users;

    const [state, setState] = useState([])

    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()

    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog()

    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog()

    const openEditDialog = (user) => {
        setState(user)
        editDialogHandler()
    }

    const openDestroyDialog = (user) => {
        setState(user)
        destroyDialogHandler()
    }

    const destroyUser = () => {
        Inertia.delete(route('users.destroy', state.id), {
            onSuccess: () => destroyCloseTrigger()
        });
    }

    return (
        <div className='container'>
            <Dialog trigger={addTrigger} title="Create new User">
                <CreateUser close={addCloseTrigger} />
            </Dialog>

            <Dialog trigger={editTrigger} title={`Edit User: ${state.name}`}>
                <EditUser model={state} close={editCloseTrigger} />
            </Dialog>

            <Dialog size="sm" trigger={destroyTrigger} title={`Delete User: ${state.name}`}>
                <p>Are you sure ?</p>
                <button onClick={destroyUser} type="submit" className="btn btn-danger">Delete</button>
            </Dialog>

            <button onClick={addDialogHandler} className="btn btn-primary">
                Add
            </button>

            <div className="card shadow mt-4">
                <div className="card-header">Users</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th className='text-end '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td key={user}>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(user)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(user)}>Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination links={links} />

                </div>
            </div>
        </div >
    )
}

Index.layout = (page) => <App children={page} title="Users" />
