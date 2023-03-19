import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Dialog from '../../Components/Dialog';
import FormPost from '../../Components/FormPost';
import Pagination from '../../Components/Pagination';
import useDialog from '../../Hooks/useDialog';
import App from '../../Layouts/App'

export default function Index(props) {

    const { data, setData, post, put, reset, errors } = useForm({
        title: '',
        slug: '',
        body: ''
    })

    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()

    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog()

    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog()

    const { data: posts, from, links } = props.posts;

    const onChange = (e) => setData({
        ...data, [e.target.id]: e.target.value
    })

    const openEditDialog = (user) => {
        setData(user)
        editDialogHandler()
    }

    const openDestroyDialog = (user) => {
        setData(user)
        destroyDialogHandler()
    }

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'), {
            data,
            onSuccess: () => {
                reset(), addCloseTrigger()
            }
        })
    }

    const updateHandler = (e) => {
        e.preventDefault();
        put(route('posts.update', data.id), {
            data,
            onSuccess: () => {
                reset(), editCloseTrigger()
            }
        })
    }

    const destroyPost = () => {
        Inertia.delete(route('posts.destroy', data.id), {
            onSuccess: () => destroyCloseTrigger()
        })
    }



    return (
        <div className="container">

            <Dialog size="lg" trigger={addTrigger} title="Create new Post">
                <FormPost {...{ errors, submitLabel: 'Create', submit: storeHandler, data, setData, onChange }} />
            </Dialog>


            <Dialog trigger={editTrigger} title={`Edit User: ${data.name}`}>
                <FormPost {...{ errors, submitLabel: 'Update', submit: updateHandler, data, setData, onChange }} />
            </Dialog>


            <Dialog size='sm' trigger={destroyTrigger} title={`Delete User: ${data.title}`}>
                <p>Are you sure?</p>
                <button onClick={destroyPost} type="submit" className="btn btn-danger">Delete</button>
            </Dialog>

            <button onClick={addDialogHandler} className="btn btn-primary">Add Post</button>

            <div className="card">
                <div className="card-header">Posts</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Body</th>
                                <th className='text-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{index + from}</td>
                                    <td>{post.title}</td>
                                    <td>{post.slug}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(post)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(post)}>Delete</button></li>
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
        </div>
    )
}

Index.layout = (page) => <App children={page} title="Posts" />
