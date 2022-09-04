import React from 'react'
import './Navbar.css'
import Icon from '../../icon/Icon'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to=''><Icon icon='person' text='About'/></Link>
        <Link to='/projects'><Icon icon='puzzle' text='Projects'/></Link>
        <Link to='/contact'><Icon icon='request' text='Contact Info'/></Link>
    </nav>
  )
}

export default Navbar