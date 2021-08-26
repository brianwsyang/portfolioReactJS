import React from 'react'
import './CV.css'

const CV = () => {

  const roles = [
    { title: 'Data Analyst',
      company: 'West Big Data Innovation Hub',
      location: 'Berkeley, CA',
      time: 'Oct 2020 - Present' },
    { title: 'Coding Instructor',
      company: 'Opportunities for All Fellowship',
      location: 'San Francisco, CA',
      time: 'Jun 2020 - Jul 2020' },
    { title: 'Data Analyst & Frontend Web Developer',
      company: 'Haas School of Business, Center for Social Sector Leadership',
      location: 'Berkeley, CA', 
      time: 'Aug 2018 - May 2020' },
    { title: 'Data Scientist & Frontend Web Developer',
      company: 'West Big Data Innovation Hub',
      location: 'Berkeley, CA',
      time: 'Jan 2019 - Jan 2020' }
  ];

  return (<>
  
  <div className='section'>
    <h4 className='sectionTitle'>curriculum vitae</h4>
    <div className='sectionSpacer'></div>

    <div className='roleSection'>
      {
        roles.map((role, i) => (
          <div key={i} className='roleItem'>
            <div className='roleTitle'>
              <h4>{ role.title }</h4>
            </div>
            <div className='roleDetail'>
              <h4>{ role.company }</h4>
              <p>{ role.location }</p>
              <p>{ role.time }</p>
            </div>
          </div>
        ))
      }
    </div>

  </div>

  </>)
}

export default CV