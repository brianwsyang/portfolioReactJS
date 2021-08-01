import React from 'react'
import './Courses.css'

const Courses = () => {

  const courses = [
    { name: 'Structure & Interpretation of Computer Programs' },
    { name: 'Data Structures' },
    { name: 'Data Analytics & Mining'},
    { name: 'Principles & Techniques of Data Science' },
    { name: 'Foundations of Data Science' },
    { name: 'Introduction to Machine Learning & Data Analytics' },
    { name: 'Introduction to Artificial Intelligence' },
    { name: 'Natural Language Processing' },
    { name: 'Computational Models of Cognition' },
    { name: 'Video Game Design & Development' },
    { name: 'Concepts of Probability' },
    { name: 'Linear Algebra and Differential Equations' },
    { name: 'Discrete Mathematics and Probability Theory' },
    { name: 'Multivariable Calculus' },
    { name: 'Introduction to Logic' },
    { name: 'Industrial Design and Human Factors' },
    { name: 'Developmental Psychology' },
    { name: 'Cognitive Neuroscience' }
  ];

  return (<>

  <div className='section'>
    <ul className='courseList'>
        {
          courses.map((course, i) => (
            <li key={i}> 
              <p>{course.name}</p>
            </li>
          ))

        }
      </ul>
  </div>
  
  
  

  </>)
}

export default Courses