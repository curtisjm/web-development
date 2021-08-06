import React from 'react'

// use spread operator to set any other attributes that are in the props object
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input {...rest} name={name} id={name} className="form-control" />
            {/* if error is true, then this expression will be returned */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input
