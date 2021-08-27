import React from 'react'
import './Projects.css'

// import temp from './images/projectCovers/testProjBkgd.png'
import maroonFivePhotos from './images/projectCovers/maroonFivePhotos.png'

const Projects = () => {

  return (<> 
  
  <div className='section'>
    <h4 className='sectionTitle'>projects</h4>
    <div className='sectionSpacer'></div>

    <div className='projSection'>
      <div className='project'>
        <img src={maroonFivePhotos} />
      </div>
      <div className='project'></div>
      <div className='project'></div>
    </div>

    <div className='projSection'>
      <div className='project'>

      </div>
      <div className='project'></div>
      <div className='project'></div>
    </div>


  </div>
  
  </>)
}

export default Projects