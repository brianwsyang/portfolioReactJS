import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
  Home,
  Intro,
} from './index.js'

const App = () => {

  return (<>
  <Navbar />

  <Home />
  <div className='spacer'></div>
  <Intro />

  <div className='spacer'></div>
  {/* <Home />
  <Home />
  <Home /> */}

  
  <Footer />
  </>)
}

export default App