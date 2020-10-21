import React from 'react'
import PropTypes from 'prop-types'

import classes from './GradientLink.module.css'

export default function GradientLink ({ children, onClick }) {
    return <a href='#' onClick={onClick} className={classes.gradientLink}>{children}</a>
}

GradientLink.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}
