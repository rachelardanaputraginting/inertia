import React from 'react'
import Dialog from '../../Components/Dialog'
import Pagination from '../../Components/Pagination'
import FormStudent from '../../Components/FormStudent';
import useDialog from '../../Hooks/useDialog'
import App from '../../Layouts/App'
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        nim: '',
        address: ''
    });

    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()

    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog()

    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog()

    const { data: students, from, links } = props.students

    const onChange = (e) => setData({
        ...data, [e.target.id]: e.target.value
    })

    const openEditDialog = (student) => {
        setData(student)
        editDialogHandler()
    }

    const openDestroyDialog = (student) => {
        setData(student)
        destroyDialogHandler()
    }

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('students.store'), {
            data,
            onSuccess: () => {
                reset(), addCloseTrigger()
            }
        })
    }

    const updateHandler = (e) => {
        e.preventDefault();
        put(route('students.update', data.id), {
            data,
            onSuccess: () => {
                reset(), editCloseTrigger()
            }
        })
    }

    const destroyStudent = () => {
        Inertia.delete(route('students.destroy', data.id), {
            onSuccess: destroyCloseTrigger()
        })
    }

    return (
        <div className="container">

            <Dialog size="lg" trigger={addTrigger} title="Create new Student">
                <FormStudent {...{ errors, submitLabel: "Create", submit: storeHandler, data, setData, onChange }} />
            </Dialog>

            <Dialog size='lg' trigger={editTrigger} title={`Edit Student: ${data.name}`}>
                <FormStudent {...{ errors, submitLabel: "Update", submit: updateHandler, data, setData, onChange }} />
            </Dialog>

            <Dialog size='sm' trigger={destroyTrigger} title={`Delete Student: ${data.name}`}>
                <p>Are you sure?</p>
                <button onClick={destroyStudent} type="submit" className='btn btn-danger'>Delete</button>
            </Dialog>

            <button onClick={addDialogHandler} className="btn btn-primary">Add Student</button>

            <div className="card mt-4">
                <div className="card-header">Students</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>NIM</th>
                                <th>Address</th>
                                <th className='text-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + from}</td>
                                    <td>{student.name}</td>
                                    <td>{student.nim}</td>
                                    <td>{student.address}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(student)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(student)} >Delete</button></li>
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

Index.layout = (page) => <App children={page} title="Students" />
