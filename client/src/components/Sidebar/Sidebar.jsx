import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCopyright, faThLarge } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  return (
 <div className="sidebar close">
  <div className="logo-details">
  
  <FontAwesomeIcon icon={faCopyright} className="copyright-icon"/>
    <span className="logo_name">Hiro's Landing</span>
  </div>
  <ul className="nav-links">
    <li>
      <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Dashboard</span>
      </a>
      <ul className="sub-menu blank">
      <li><a className="link_name" href='#'>Post</a></li>
     
    </ul>
    </li>
   
    <li>
    <div className="icon-links">
    <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Category</span>
      </a>
      <FontAwesomeIcon icon={faAngleDown} className="nav-icons"/>
    </div>
    <ul className="sub-menu">
      <li><a className="link_name" href='#'>Post</a></li>
      <li><a href='#'>HTML</a></li>
      <li><a href='#'>JAVA</a></li>
      <li><a href='#'>JavaScript</a></li>
    </ul>
    </li>

    <li>
    <div className="icon-links">
    <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Posts</span>
      </a>
      <FontAwesomeIcon icon={faAngleDown} className="nav-icons"/>
    </div>
    <ul className="sub-menu">
      <li><a className="link_name" href='#'>Posts</a></li>
      <li><a href='#'>Web Design</a></li>
      <li><a href='#'>Login Form</a></li>
      <li><a href='#'>Card Design</a></li>
    
    </ul>
    </li>
    <li>
      <a href='#'>
      <FontAwesomeIcon icon={faThLarge} className="nav-icons"/>
      
    <span className="link_name">Analytics</span>
      </a>
      <ul className="sub-menu blank">
      <li><a className="link_name" href='#'>Analytics</a></li>
     
    </ul>
    </li>
  </ul>
 </div>
  )
}

export default Sidebar