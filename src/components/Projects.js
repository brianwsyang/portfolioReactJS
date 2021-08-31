import React from 'react'
import './Projects.css'

import airbnbPricePrediction from './images/projectCovers/airbnbPricePrediction.png'
import acnhData from './images/projectCovers/acnhDataManipulation.png'
import maroonFivePhotos from './images/projectCovers/maroonFivePhotos.png'
import temp from './images/projectCovers/testProjBkgd.png'

const Projects = () => {

  return (<> 
  
  <div className='section'>
    <h4 className='sectionTitle'>recent projects</h4>
    <div className='sectionSpacer'></div>

    <div className='projSection'>
      <div className='projContainer'>
        <div className='projOverlay'>
          <img src={airbnbPricePrediction} className='projCover' />
        </div>
        <h1>airbnb price prediction</h1>
      </div>
      <div className='projContainer'>
        <div className='projOverlay'>
          <img src={acnhData} className='projCover' />
        </div>
        <h1>animal crossing: new horizon data manipulation</h1>
      </div>
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