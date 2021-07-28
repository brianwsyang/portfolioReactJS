import React from 'react'
import './Home.css'

import SF from './images/SF02.jpg'

const Home = () => {

  return (<>
  <div className='homeContainer'>
    <img src={SF} className='homeBkgd' />
    <p>brian</p> 
  </div>
  </>)
}

export default Home