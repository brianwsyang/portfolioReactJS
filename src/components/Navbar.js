import React from 'react'
import './Navbar.css'

import Logo from './images/Logo.png'
import LinkedIn from './images/LinkedIn.png'
import Resume from './images/Resume.png'

const Navbar = () => {

  return (<>
  <div className='top'>
    <div className='logo'>
      <img src={Logo} />
    </div>
    
    <div className='nav'>
      <a href='https://www.linkedin.com/in/brianwsyang/' 
         target='_blank' 
         rel='noopener noreferrer'>Home</a>
      <a href='https://www.linkedin.com/in/brianwsyang/' 
         target='_blank' 
         rel='noopener noreferrer'>CV</a>
      <a href='https://www.linkedin.com/in/brianwsyang/' 
         target='_blank' 
         rel='noopener noreferrer'>Projects</a>
      <a href='https://www.linkedin.com/in/brianwsyang/' 
         target='_blank'
         rel='noopener noreferrer'>
        <img className='navLogo' src={LinkedIn} />
      </a>
      <a href='https://www.linkedin.com/in/brianwsyang/' 
         target='_blank'
         rel='noopener noreferrer'>
        <img className='navLogo' src={Resume} />
      </a>
    </div>
  </div>

  <div className='topFill'></div>
  </>)
}

export default Navbar