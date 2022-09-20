import React, { useEffect, useState }  from 'react'
import { useHistory, Link } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function registerUser(event) {
        event.preventDefault()
const response = await fetch('http://localhost:8000/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  //there are many content types that can be sent in different ways: binary data, URLencoded etc
    },
    body: JSON.stringify({
        name,
        email,
        password,
    }),
})

const data = await response.json()
 console.log(data)
if(data.status === 'ok') {
    history.push('/login')
}
    }

  return (
    <div className='login-reg-container'>
    <h1>Register</h1>

   
    <form onSubmit={registerUser}>

    <div className='input-field'>
        <input
        value={name}
        onChange ={(e) => setName(e.target.value)}
        type = "text"
        placeholder="Name"
        />
        </div>
        
<br/>
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
        <input type="submit" value="Register" className='register-button'/>
    </form>

    <Link to="/login">Already have an account? Login here</Link>
    </div>
  )
}

export default Register