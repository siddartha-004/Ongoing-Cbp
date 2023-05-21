import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  const User=null

  return (
    <div className='container'>
     <nav>
        <div className='navbar'>
           <NavLink to='/' className='nav-item nav-logo' >
            <img src={""} alt='logo' width={150}/>
           </NavLink>
           <NavLink to='/' className='nav-item nav-btn' >Home</NavLink>
           <NavLink to='/aboutus' className='nav-item nav-btn' >About Us</NavLink>
           <NavLink to='/register' className='nav-item nav-btn' >Register</NavLink>
            {User===null ?
            <NavLink to='/Login' className='nav-item nav-links'>Log In</NavLink>:
            <>
           
             <button className='nav-item nav-links'>Log Out</button>
             </>}
        </div>
    </nav>
    </div>
  )
}

export default NavBar