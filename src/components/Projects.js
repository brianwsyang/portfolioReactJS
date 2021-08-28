import React from 'react'
import './Projects.css'

import temp from './images/projectCovers/testProjBkgd.png'
import maroonFivePhotos from './images/projectCovers/maroonFivePhotos.png'

const Projects = () => {

  return (<> 
  
  <div className='section'>
    <h4 className='sectionTitle'>recent projects</h4>
    <div className='sectionSpacer'></div>

    <div className='projSection'>
    </div>

    <div className='projSection'>
      <div className='projContainer'>
        <div className='projOverlay'>
          <img src={maroonFivePhotos} className='projCover' />
        </div>
        <h1>maroon 5's sunday morning</h1>
      </div>
      <div className='projContainer'>
        <div className='projOverlay'>
          <img src={temp} className='projCover' />
        </div>
        <h1>for all other projects...</h1>
      </div>
    </div>


  </div>
  
  </>)
}

export default Projects