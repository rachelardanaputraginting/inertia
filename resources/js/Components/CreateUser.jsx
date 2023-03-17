import { useForm } from '@inertiajs/inertia-react'
import React from 'react'
import FormUser from './FormUser';

export default function CreateUser({ close }) {

    const { data, setData, post, reset, errors } = useForm({
        name: '',
        username: '',
        email: '',
        location: '',
        password: '',

    })


    const submitHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            data,
            onSuccess: () => reset(),
            onSuccess: () => close()
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <FormUser {...{ errors, data, setData, submit: 'Save' }} />
            </form >
        </div >
    )
}
