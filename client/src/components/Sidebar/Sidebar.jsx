import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faThLarge } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  return (
 <div className="sidebar">
  <div className="logo-details">
  
  <FontAwesomeIcon icon={faCopyright} className="nav-icon"/>
    <span className="logo_name">Hiro's Landing</span>
  </div>
  <ul className="nav-links">
    <li>
      <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Dashboard</span>
      </a>
    </li>
   
    <li>
    <div className="icon-links">
    <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Category</span>
      </a>
    </div>
    </li>
  </ul>
 </div>
  )
}

export default Sidebar