import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.module.css'

export default function Input({ value, onChange, label, placeholder, type = 'text', id, name, ...rest }) {
    return <div className={classes.inputContainer}>
        {label && <label
            htmlFor={id}
            className={classes.label}
        >
            {label}
        </label>
        }
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={classes.input}
            {...rest}
        />
    </div>
}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
}
