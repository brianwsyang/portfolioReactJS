import React from 'react'
import './Intro.css'

import ProfPic from './images/ProfPic.png'

const Intro = () => {

  return (<>
  <div className='introContainer'>
    <div className='intro'>
      <p>
          Because of the quarantine, a simple virtual graduation 
          marked the start of my adulting life. While safety concerns 
          buried grandiose plans for weeks-long trips, I'm poking in 
          all directions to get a feel for the correct set of rules 
          and strategies as if I started this video game without 
          properly playing through the tutorial.
        </p>
      <img src={ProfPic} />
    </div>
  </div>
  </>)
}

export default Intro