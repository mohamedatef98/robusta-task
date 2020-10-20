import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { api } from '../../constants'

import LoginForm from '../LoginForm'
import SignupForm from '../SignupForm'
import classes from './AuthForm.module.css'


export default function AuthForm({ className = '' }) {
    const [showLoginForm, setShowLoginForm] = useState(true)

    const handleLoginClick = useCallback(
        () => setShowLoginForm(true),
        []
    )
    const handleSignupClick = useCallback(
        () => setShowLoginForm(false),
        []
    )

    const handleLoginSubmit = useCallback(
        (f) => axios.post(`${api}/auth/login`, { ...f })
            .then(console.log)
        ,[]
    )

    const handleSignupSubmit = useCallback(
        (f) => axios.post(`${api}/auth/register`, { ...f })
            .then(console.log)
        ,[]
    )

    return <div className={`${classes.formContainer} ${className}`}>
        <h3 className={classes.formHeader}>{showLoginForm ? 'Login' : 'Signup'} Form</h3>

        <div className={classes.formSelect}>
            <button className={showLoginForm ? classes.selected : ''} onClick={handleLoginClick}>Login</button>
            <button className={!showLoginForm ? classes.selected : ''} onClick={handleSignupClick}>Signup</button>
        </div>

        {showLoginForm ?
            <LoginForm onSubmit={handleLoginSubmit}/> :
            <SignupForm onSubmit={handleSignupSubmit}/>
        }
    </div>
}

AuthForm.propTypes = {
    className: PropTypes.string
}
