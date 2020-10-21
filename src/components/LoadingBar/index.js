import React from 'react'
import PropTypes from 'prop-types'

import classes from './LoadingBar.module.css'

export default function LoadingBar({ loading }) {
    return loading ?
        <>
            <div className={classes.overLay}></div>
            <div className={classes.movingBar}></div>
        </> :
        null
}

LoadingBar.propTypes = {
    loading: PropTypes.bool
}
