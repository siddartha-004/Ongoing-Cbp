import React from 'react'
import {NavLink} from 'react-router-dom'
import "./MainBar.css"
function MainBar() {
  return (
    
        <div className='MainBar'>
        
            Host your Event to grab Attention!  <NavLink to='/book' className='nav-item-2' ><span>Book now!</span></NavLink>
      
        </div>
    
  )
}

export default MainBar