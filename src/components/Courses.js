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
  const coursesList = [];
  while(courses.length > 0) coursesList.push(courses.splice(0, 3));


  return (<>

  {/* <div className='section'>
    <ul className='courseList'>
        {
          courses.map((course, i) => (
            <li key={i}> 
              <p>{ i%3 == 2 ? 'tesm. ' + course.name : course.name }</p>
            </li>
          ))

        }
      </ul>
  </div> */}

  <div className='section'>
    <table className='tempList'>
      {
        coursesList.map((courses, i) => (
          <tr key={i}>
            <td>{courses[0].name}</td>
            <td>{ courses.length > 1 ? courses[1].name : '' }</td>
            <td>{ courses.length > 2 ? courses[2].name : '' }</td>
          </tr>
        ))
      }
    </table>
  </div>
  
  
  

  </>)
}

export default Courses