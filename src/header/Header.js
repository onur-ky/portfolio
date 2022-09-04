import React from 'react'
import './Header.css'
import Navbar from './navbar/Navbar'

function Header() {
  return (
    <div className='header'>
        <div className='header-wrapper'>
                <h1>Onur Kaya</h1>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header