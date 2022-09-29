import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faStar, faBook, faGear, faCopyright, faThLarge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import profile from '../../images/profile.jpg';

const Sidebar = () => {
  return (
 <div className="sidebar close">
  <div className="logo-details">
  
  <FontAwesomeIcon icon={faCopyright} className="copyright-icon"/>
    <span className="logo_name">Hiro's Landing</span>
  </div>
  <ul className="sidebar-links">
    <li>
      <a href='/dashboard'>
      <FontAwesomeIcon icon={faThLarge} className="sidebar-icons"/>
      
    <span className="link_name">Dashboard</span>
      </a>
      <ul className="sub-menu blank">
      <li><a className="link_name" href='#'>Post</a></li>
     
    </ul>
    </li>
   
    <li>
    <div className="icon-links">
    <a href='#'>
      <FontAwesomeIcon icon={faBook} className="sidebar-icons"/>
      
    <span className="link_name">Posts</span>
      </a>
      <FontAwesomeIcon icon={faAngleDown} className="sidebar-icons"/>
    </div>
    <ul className="sub-menu">
      <li><a className="link_name" href='#'>Posts</a></li>
      <li><a href='#'>Web Design</a></li>
      <li><a href='#'>Login Form</a></li>
      <li><a href='#'>Card Design</a></li>
    </ul>
    </li>

    <li>
    <div className="icon-links">
    <a href='#'>
      <FontAwesomeIcon icon={faStar} className="sidebar-icons"/>
      
    <span className="link_name">Ratings</span>
      </a>
      <FontAwesomeIcon icon={faAngleDown} className="sidebar-icons"/>
    </div>
    <ul className="sub-menu">
      <li><a className="link_name" href='#'>Post</a></li>
      <li><a href='#'>HTML</a></li>
      <li><a href='#'>JAVA</a></li>
      <li><a href='#'>JavaScript</a></li>
   
    
    </ul>
    </li>
    <li>
      <a href='#'>
      <FontAwesomeIcon icon={faGear} className="sidebar-icons"/>
      
    <span className="link_name">Settings</span>
      </a>
      <ul className="sub-menu blank">
      <li><a className="link_name" href='#'>Analytics</a></li>
     
    </ul>
    </li>
    <li>
  <div className="profile-details">
    <div className="profile-content">
      <img src={profile} alt="profile" />
    </div>
    
    <div className="name-job">
      <div className="profile_name">Kyle Young</div>
      <div className="job">Full-Stack Developer</div>
    </div>
    <FontAwesomeIcon icon={faRightFromBracket} className="sidebar-icons"/>
  </div>
  </li>
   </ul>
 </div>
  )
}

export default Sidebar