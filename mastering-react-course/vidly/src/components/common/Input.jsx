import React from 'react'

const Input = ({ name, label, value, onChange, error }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                // use to set the value of this element. make it controlled to have a single source of truth
                value={value}
                // call this method when user starts typing in input field
                onChange={onChange}
                name={name}
                id={name}
                type="text"
                className="form-control"
            />
			{/* if error is true, then this expression will be returned */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input
