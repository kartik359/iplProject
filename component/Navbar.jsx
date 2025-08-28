import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='navbar'>
        <div className='seriesName'>
          Tata IPL 2024
        </div>

        {/* Hamburger button only visible on small devices */}
        <button 
          className="menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`option ${menuOpen ? "show" : ""}`}>
          <Link id="link" to='/' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link id="link" to='/table' onClick={() => setMenuOpen(false)}>Table</Link>
          <Link id="link" to='/news' onClick={() => setMenuOpen(false)}>News</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
