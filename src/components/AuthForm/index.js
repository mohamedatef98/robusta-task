import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { api } from '../../constants'

import LoginForm from '../LoginForm'
import SignupForm from '../SignupForm'
import LoadingBar from '../LoadingBar'
import classes from './AuthForm.module.css'


export default function AuthForm({ className = '', onSignup, onLogin, onError }) {
    const [showLoginForm, setShowLoginForm] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleLoginClick = useCallback(
        () => setShowLoginForm(true),
        []
    )
    const handleSignupClick = useCallback(
        () => setShowLoginForm(false),
        []
    )

    const handleLoginSubmit = useCallback(
        (f) => {
            setLoading(true)
            axios.post(`${api}/auth/login`, { ...f })
                .then(r => setLoading(false))
                .then(onLogin)
                .catch(onError)
        }
        , []
    )

    const handleSignupSubmit = useCallback(
        (f) => {
            setLoading(true)
            axios.post(`${api}/auth/register`, { ...f })
                .then(r => setLoading(false))
                .then(onSignup)
                .catch(onError)
        }
        , []
    )

    return <div className={`${classes.formContainer} ${className}`}>
        <LoadingBar loading={loading} />
        <h3 className={classes.formHeader}>{showLoginForm ? 'Login' : 'Signup'} Form</h3>

        <div className={classes.formSelect}>
            <button className={showLoginForm ? classes.selected : ''} onClick={handleLoginClick}>Login</button>
            <button className={!showLoginForm ? classes.selected : ''} onClick={handleSignupClick}>Signup</button>
        </div>

        {showLoginForm ?
            <LoginForm onSubmit={handleLoginSubmit} onSignup={handleSignupClick} /> :
            <SignupForm onSubmit={handleSignupSubmit} onLogin={handleLoginClick} />
        }
    </div>
}

AuthForm.propTypes = {
    className: PropTypes.string,
    onSignup: PropTypes.func,
    onLogin: PropTypes.func,
    onError: PropTypes.func
}
