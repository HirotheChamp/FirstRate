import React from 'react'
import './Navbar.css'
import { faAngleDown, faStar, faBell, faBook, faMessage, faGear, faCopyright, faThLarge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav>
    <ul className='nav-menu-items'>

<li>
<a href='#'>
      <FontAwesomeIcon icon={faBook} className="nav-icons"/>
      
    <span className="link_name">Posts</span>
      </a>
      </li>
      
      <li>
<a href='#'>
      <FontAwesomeIcon icon={faMessage} className="nav-icons"/>
      
    <span className="link_name">Messenger</span>
      </a>
      </li>

      <li>
<a href='#'>
      <FontAwesomeIcon icon={faBell} className="nav-icons"/>
      
    <span className="link_name">Notifications</span>
      </a>
      </li>


    </ul>
    </nav>
  )
}

export default Navbar