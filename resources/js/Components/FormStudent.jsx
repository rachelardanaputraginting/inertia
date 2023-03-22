import React from 'react'

export default function FormStudent({ errors, submitLabel, submit, data, onChange }) {
    return (
        <form onSubmit={submit}>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" value={data.name} onChange={onChange} id="name" className="form-control" />
                    {errors && <span className='text-danger text-xs mt-1'>{errors.name}</span>}
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="nim" className="form-label">NIM</label>
                    <input type="number" name="nim" value={data.nim} onChange={onChange} id="nim" className="form-control" />
                    {errors && <span className='text-danger text-xs mt-1'>{errors.nim}</span>}
                </div>
            </div>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea name="address" id="address" cols="30" rows="10" className="form-control" value={data.address} onChange={onChange}>{data.address}</textarea>
                    {errors && <span className='text-danger text-xs mt-1'>{errors.address}</span>}
                </div>
            </div>
            <button type='submit' className='btn btn-primary'>{submitLabel}</button>
        </form>
    )
}
