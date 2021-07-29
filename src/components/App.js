import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
  Spacer,
  Home,
  Intro,
} from './index.js'

const App = () => {

  return (<>
  <Navbar />

  {/* Home Pg */}
  <Home />
  <Spacer />
  <Intro />
  <Spacer />

  {/* <Home />
  <Home />
  <Home /> */}

  
  <Footer />
  </>)
}

export default App