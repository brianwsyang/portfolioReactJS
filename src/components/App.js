import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
  Home,
} from './index.js'

import SF from './images/SF02.jpg'

const App = () => {

  return (<>
  <Navbar />

  <Home />
  
  <div className='spacer'></div>
  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />
  <img src={SF} className='homeBkgd' />

  
  <Footer />
  </>)
}

export default App