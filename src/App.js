import React from 'react'

function App() {
  return (
    <div>
      <form action="https://private-b2e6827-robustatask.apiary-mock.com/auth/register" method="post">
        <div className="form-group">
          <span>Full Name</span>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <span>Username</span>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input type="password" id="password" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App
