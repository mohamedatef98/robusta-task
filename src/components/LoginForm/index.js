import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return <form onSubmit={onSubmit}>
        <Input
            id='email'
            type='email'
            placeholder='Email'
            label='Email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <Input
            id='password'
            type='password'
            placeholder='Password'
            label='Password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <Button type='submit'>
            Login
        </Button>
    </form>
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func
}
