import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
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

    return <div className={`${classes.formContainer} ${className}`}>
        <h3 className={classes.formHeader}>{showLoginForm ? 'Login' : 'Signup'} Form</h3>

        <div className={classes.formSelect}>
            <button className={showLoginForm ? classes.selected : ''} onClick={handleLoginClick}>Login</button>
            <button className={!showLoginForm ? classes.selected : ''} onClick={handleSignupClick}>Signup</button>
        </div>
        
        {showLoginForm ? <LoginForm /> : <SignupForm />}
    </div>
}

AuthForm.propTypes = {
    className: PropTypes.string
}
