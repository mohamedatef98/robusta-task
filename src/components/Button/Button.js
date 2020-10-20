import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

export default function Button ({ children, type, onClick }) {
    return <button className={classes.button} onClick={onClick} type={type}>
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    onClick: PropTypes.func
}
