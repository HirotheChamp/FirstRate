import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Newsfeed from '../../components/Newsfeed/Newsfeed'
import './Dashboard.css'

const Dashboard = () => {
const [quote, setQuote] = useState('')
const [tempQuote, setTempQuote] = useState('')
  const history = useHistory()
  
  
    


async function populateQuote() {
 const req = await fetch('http://localhost:8000/api/quote', {
  headers: {
    'x-access-token': localStorage.getItem('token'),
  },
 })

const data = await req.json()
if (data.status === 'ok') {
  setQuote(data.quote)
} else {
  alert(data.error)
}
}

useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        history.replace('/login')
      } else {
        populateQuote()
      }
    }
  }, [])


  async function updateQuote(event) {
event.preventDefault()

    const req = await fetch('http://localhost:8000/api/quote', {
      method: 'POST',
  headers: {
    'Content-Type' : 'application/json',
    'x-access-token': localStorage.getItem('token'),
  },
  body: JSON.stringify({
quote: tempQuote,
  }),
 })

const data = await req.json()
if (data.status === 'ok') {
  
  setQuote(tempQuote)
  setTempQuote('')
} else {
  alert(data.error)
}
  }


  return (
    
      <><div className='navbar'>
      <Navbar />
    </div>
    {/* <h1>Your quote: {quote || "no quote found"}</h1>
  
        <form onSubmit={updateQuote}>
          <input
            type="text"
            placeholder="Quote"
            value={tempQuote}
            onChange={(e) => setTempQuote(e.target.value)} />
          <input type="submit" value="Update quote" />
        </form> */}
        <div className='dashboard'>
        <div className='sidebar'>
          <Sidebar />
        </div>


        <div className='newsfeed'>
          <Newsfeed />
        </div>


      </div></>
  )
}

export default Dashboard