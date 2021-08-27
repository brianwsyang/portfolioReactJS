import React from 'react'
import './App.css'

import {
  Navbar,
  Footer,
  Spacer,
  Home,
  Intro,
  Projects,
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
  
  {/* Projects */}
  <Projects />
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