import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import isEmail from 'validator/lib/isEmail'

import Input from '../Input'
import Button from '../Button'
import GradientLink from '../GradientLink'
import { INVALID_EMAIL_ERR, REQUIRED_FIELD_ERR, MIN_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH_ERR } from '../../constants'

const validateLoginForm = ({ email, password }) => {
    const validationErrors = { email: [], password: [] }
    if (email.trim() === '') validationErrors.email.push(REQUIRED_FIELD_ERR('Email'))
    else if (!isEmail(email)) validationErrors.email.push(INVALID_EMAIL_ERR)

    if (password.trim() === '') validationErrors.password.push(REQUIRED_FIELD_ERR('Password'))
    else if (password.length < MIN_PASSWORD_LENGTH) validationErrors.password.push(MIN_PASSWORD_LENGTH_ERR)

    return validationErrors
}

export default function LoginForm({ onSubmit, onSignup }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const handleFormSubmit = useCallback(
        (e) => {
            e.preventDefault()
            const validationResult = validateLoginForm({ email, password })
            if (!validationResult.email.length && !validationResult.password.length) {
                onSubmit({ email, password })
                setFormErrors({})
            }
            else setFormErrors(validationResult)
        },
        [onSubmit, email, password]
    )

    return <form onSubmit={handleFormSubmit}>
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
            id='password'
            type='password'
            placeholder='Password'
            label='Password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={formErrors.password?.[0]}
        />
        <Button type='submit'>
            Login
        </Button>
        <p>Not a member? <GradientLink onClick={onSignup}>Signup now!</GradientLink></p>

    </form>
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    onSignup: PropTypes.func
}
