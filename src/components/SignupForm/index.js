import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import isEmail from 'validator/lib/isEmail'

import Input from '../Input'
import Button from '../Button'
import GradientLink from '../GradientLink'
import { INVALID_EMAIL_ERR, MIN_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH_ERR, REQUIRED_FIELD_ERR } from '../../constants'

import classes from './SignupForm.module.css'

const validateSignupForm = ({ fullName, userName, email, password }) => {
    const validationErrors = { fullName: [], userName: [], email: [], password: [] }

    if (fullName.trim() === '') validationErrors.fullName.push(REQUIRED_FIELD_ERR('Full Name'))

    if (userName.trim() === '') validationErrors.userName.push(REQUIRED_FIELD_ERR('Username'))

    if (email.trim() === '') validationErrors.email.push(REQUIRED_FIELD_ERR('Email'))
    else if (!isEmail(email)) validationErrors.email.push(INVALID_EMAIL_ERR)

    if (password.trim() === '') validationErrors.password.push(REQUIRED_FIELD_ERR('Password'))
    else if (password.length < MIN_PASSWORD_LENGTH) validationErrors.password.push(MIN_PASSWORD_LENGTH_ERR)

    return validationErrors
}

export default function SignupForm({ onSubmit, onLogin }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const handleFormSubmit = useCallback(
        (e) => {
            e.preventDefault()
            const validationResults = validateSignupForm({ fullName, userName, email, password })
            if (
                !validationResults.fullName.length &&
                !validationResults.userName.length &&
                !validationResults.email.length &&
                !validationResults.password.length
            ) {
                onSubmit({ fullName, userName, email, password })
                setFormErrors({})
            }
            else setFormErrors(validationResults)
        },
        [fullName, userName, email, password, onSubmit]
    )

    return <form onSubmit={handleFormSubmit}>
        <Input
            id='fullname'
            type='text'
            placeholder='Full name'
            label='Full name'
            name='fullname'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            error={formErrors.fullName?.[0]}
        />
        <Input
            id='email'
            type='email'
            placeholder='Email'
            label='Email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={formErrors.email?.[0]}
        />
        <Input
            id='username'
            type='text'
            placeholder='User name'
            label='User name'
            name='username'
            value={userName}
            onChange={e => setUserName(e.target.value)}
            error={formErrors.userName?.[0]}
        />
        <Input
            id='password'
            type='password'
            placeholder='Password'
            label='Password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={formErrors.password?.[0]}
        />
        <Button type='submit' formNoValidate>
            Signup
        </Button>
        <p className={classes.login}>Already a member? <GradientLink onClick={onLogin}>Login now!</GradientLink></p>
    </form>
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func,
    onLogin: PropTypes.func
}
