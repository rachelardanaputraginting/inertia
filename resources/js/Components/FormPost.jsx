import React from 'react'

export default function FormPost({ errors, submitLabel, submit, data, onChange }) {
    return (
        <form onSubmit={submit}>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Title</label>
                    <input type="text" name="title" value={data.title} onChange={onChange} id="title" className="form-control" />
                    {errors && <span className='text-danger text-xs mt-1'>{errors.title}</span>}
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Slug</label>
                    <input type="text" name="slug" value={data.slug} onChange={onChange} id="slug" className="form-control" />
                    {errors && <span className='text-danger text-xs mt-1'>{errors.slug}</span>}
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Slug</label>
                    <textarea name="body" id="body" cols="30" rows="10" className="form-control" value={data.body} onChange={onChange}>{data.body}</textarea>
                    {errors && <span className='text-danger text-xs mt-1'>{errors.body}</span>}
                </div>
            </div>
            <button type='submit' className='btn btn-primary'>{submitLabel}</button>
        </form>
    )
}
