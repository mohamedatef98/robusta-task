import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'

export default function SignupForm({ onSubmit }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    return <form onSubmit={onSubmit}>
        <Input
            id='fullname'
            type='text'
            placeholder='Full name'
            label='Full name'
            name='fullname'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
        />
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
            id='username'
            type='text'
            placeholder='User name'
            label='User name'
            name='username'
            value={userName}
            onChange={e => setUserName(e.target.value)}
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
            Signup
        </Button>
    </form>
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func
}
