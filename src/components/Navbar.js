import React from 'react'
import './Navbar.css'

import Logo from './images/Logo.png'
import LinkedInLogo from './images/LinkedIn.png'
import ResumeLogo from './images/Resume.png'
import Resume from './images/Brian_Yang_Resume.pdf'

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
        <img className='navLogo' src={LinkedInLogo} />
      </a>
      <a href={Resume} 
         target='_blank'
         rel='noopener noreferrer'>
        <img className='navLogo' src={ResumeLogo} />
      </a>
    </div>
  </div>

  <div className='topFill'></div>
  </>)
}

export default Navbar