import React from 'react'
import { AuthForm } from './components'

import classes from './App.module.css'

function App() {
  return <main>
    <AuthForm className={classes.authForm} />
  </main>
}

export default App
