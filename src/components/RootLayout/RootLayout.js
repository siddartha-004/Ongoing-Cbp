import React from 'react'
import MainBar from '../MainBar/MainBar'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import './RootLayout.css';
function RootLayout() {
  return (
    <div className='body'>
        <MainBar/>
        <NavBar/>
        <div className='container-1'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout