import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { FaReact,FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import {navMenus} from './config'
import "./style.scss"

const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick =()=>{
    setClick(!click);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={'/'} className="navbar-container-logo">
            <FaReact size={30}/>
          </Link>
          <ul className={click?"navbar-container-menu active":"navbar-container-menu"}>
           {
            navMenus.map((item,key)=>(
              <li className="navbar-container-menu-item">
                <Link to={item.to} className="navbar-container-menu-item-links">{item.label}</Link>
              </li>
            ))
           }
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {
              click?<HiX size={30}/>: <FaBars size={30}/>
            }

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;