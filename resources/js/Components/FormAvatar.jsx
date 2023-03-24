import React from 'react'

export default function FormAvatar({ errors, data, setData, onChange, submitLabel, submit }) {

    return (
        <form onSubmit={submit} encType='multipart/form-data'>
            <div className="mb-3">
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" name='name' id='name' value={data.name} onChange={onChange} className="form-control" />
                {errors && <span className='text-danger text-xs mt-1'>{errors.name}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="image" className='form-label'>Image</label>
                <input type="file" onChange={e => setData('image', e.target.files[0])} id="image" name='image' className="form-control" />
                {errors && <span className='text-danger text-xs mt-1'>{errors.image}</span>}
            </div>
            {/* {progress && (
                <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                </progress>
            )} */}
            <button type="submit" className='btn btn-primary'>{submitLabel}</button>
        </form>
    )
}
