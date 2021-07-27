import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
} from './index.js'

import SF from './images/SF02.jpg'

const App = () => {

  return (<>
  <Navbar />

  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />

  
  <Footer />
  </>)
}

export default App