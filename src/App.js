import React, { useCallback, useEffect, useState } from 'react'
import { AuthForm } from './components'

import classes from './App.module.css'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        document.title = 'Sign up | Robusta'
    }, [])

    const clearMessage = useCallback(
        () => setTimeout(() => setMessage(''), 2000),
        []
    )

    const handleSignup = useCallback(
        () => {
            setMessage('You Have Signed up! Wait 2sec or refresh')
            clearMessage()
        },
        []
    )

    const handleLogin = useCallback(
        () => {
            setMessage('You Have Logged in! Wait 2sec or refresh')
            clearMessage()
        },
        []
    )

    const handleError = useCallback(
        () => {
            setMessage('An Error occurred! Wait 2sec or refresh')
            clearMessage()
        },
        []
    )

    return <main>
        {message ?
            <h2 className={classes.message}>{message}</h2> :
            <AuthForm
                className={classes.authForm}
                onSignup={handleSignup}
                onLogin={handleLogin}
                onError={handleError}
            />
        }
    </main>
}

export default App
