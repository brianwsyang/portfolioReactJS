import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
  Spacer,
  Home,
  Intro,
  CV,
  Courses,
} from './index.js'

const App = () => {

  return (<>
  <Navbar />

  {/* Home Pg */}
  <Home />
  <Spacer />
  <Intro />
  <Spacer />

  {/* CV */}
  <Spacer />
  <CV />
  <Spacer />
  <Courses />
  <Spacer />

  
  <Footer />
  </>)
}

export default App