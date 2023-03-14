import React from 'react'

export default function Dialog({ trigger, title, size = 'lg', children }) {
    return (
        <div className="modal fade" ref={trigger} tabIndex={-1}>
            <div className={`modal-dialog modal-dialog-centered modal-${size}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}
