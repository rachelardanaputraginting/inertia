import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import FormUser from './FormUser';

export default function EditUser({ close, model }) {

    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        username: model.username,
        email: model.email,
        location: model.location,
    })

    const changeHandler = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const submitHandler = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), {
            data,
            onSuccess: () => reset(),
            onSuccess: () => close()
        })
    }

    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            username: model.username,
            email: model.email,
            location: model.location,
        })
    }, [model])

    return (
        <div>
            <form onSubmit={submitHandler}>

                <FormUser errors={errors} data={data} setData={setData} submit={"Update"} />

                {/* <FormUser {...{ errors, data, setData={ setData } submit: 'Update' }} /> */}
            </form >
        </div >
    )
}
