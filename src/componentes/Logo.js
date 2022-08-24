import React from 'react'
import freCodeCampLogo from '../imagenes/freeCodeCampLogo.png'
import '../styles/Logo.css'

export const Logo = () => {
  return (
    <div className='freecodecamp-logo-container'> 
        <img
            className='freecodecamp-logo'
            src={freCodeCampLogo}
            alt='logo de freeCodeCamp'/>
  </div>
  )
}
