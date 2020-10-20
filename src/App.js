import React, { useEffect } from 'react'
import { AuthForm } from './components'

import classes from './App.module.css'

function App() {
  useEffect(() => {
    document.title = 'Sign up | Robusta'
  }, [])
  
  return <main>
    <AuthForm className={classes.authForm} />
  </main>
}

export default App
