import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import './LoginReg.css'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  //there are many content types that can be sent in different ways: binary data, URLencoded etc
    },
    body: JSON.stringify({
       
        email,
        password,
    }),
})

const data = await response.json()

if (data.user) {
  localStorage.setItem('token', data.user)
  alert('Login successful!')
  window.location.href = '/dashboard'
} else {
  alert ('Please check your username and password!')
}

console.log(data)
    }

  return (
    <div className='login-reg-container'>
    <h1>Login</h1>
   
    <form on onSubmit={loginUser}>
    <div className='input-field'>
<input
        value={email}
        onChange ={(e) => setEmail(e.target.value)}
        type = "email"
        placeholder="Email"
        />
        </div>
<br/>
<div className='input-field'>
<input
        value={password}
        onChange ={(e) => setPassword(e.target.value)}
        type = "password"
        placeholder="Password"
        />
        </div>
        <br/>
        <input type="submit" value="Login" className='login-button'/>
    </form>
    <Link to="/register">Forgot password?</Link>
    <br/>

  <span id='underline'></span>

   <div className='button-section'>
<button>
    <Link to="/register">Create new account</Link>
    </button>
    </div>
    </div>
  )
}

export default Login