import { useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Dialog from '../../Components/Dialog';
import FormAvatar from '../../Components/FormAvatar';
import Pagination from '../../Components/Pagination';
import useDialog from '../../Hooks/useDialog';
import App from '../../Layouts/App'

export default function Index(props) {

    const { data, setData, post, reset, errors } = useForm({
        name: '',
        image: null,
    })

    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();

    const { data: avatars, from, links } = props.avatars;

    const onChange = (e) => setData({
        ...data, [e.target.id]: e.target.value
    })

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('avatars.store'), {
            data,
            onSuccess: () => {
                reset(), addCloseTrigger()
            }

        })
    }





    return (


        <div className='container mt-4'>
            <Dialog size="lg" trigger={addTrigger} title="Create new Avatars">
                <FormAvatar {...{ errors, submitLabel: 'Create', submit: storeHandler, data, setData, onChange }} />
            </Dialog>

            <button className='btn btn-primary' onClick={addDialogHandler}>Add Avatars</button>
            <div className="card mt-4">
                <div className="card-header">Avatars</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th className='text-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {avatars.map((avatar, index) => (
                                <tr key={index}>
                                    <td>{index + from}</td>
                                    <td>{avatar.name}</td>
                                    <td>
                                        <img src={`/storage/${avatar.image}`} width="50" />
                                    </td>
                                    {/* <td><img src={avatar.image} alt={avatar.image} className="img-fluid" /></td> */}
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            {/* <ul className="dropdown-menu">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(post)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(post)}>Delete</button></li>
                                            </ul> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={links} />
                </div>
            </div>
        </div>
    )
}

Index.layout = (page) => <App children={page} title="Avatar" />
