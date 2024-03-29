/**
 * Education Component
 * This component is used to display the education details of the user.
 * This can include the schools attended, courses taken, and degrees earned.
 */

import React from "react";

const Education = () => {
  const educationList = [
    { 
      university: 'Polytechnic University of Tirana', 
      degree: 'Bachelor Degree: Electronics and Telecommunications Engineering', 
      date: 'September 2014 - July 2022' 
    },
    { 
      university: '42 Wolfsburg', 
      degree: 'Software Engineering Student', 
      date: 'May 2023 - Present' 
    },
    // Add more education data here
  ];

  return(
    <section className="light" id="education">
      <h2>Education</h2>
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {educationList.map((education, index) => (
          <div key={index}>
            <h3>{education.university}</h3>
            <p>{education.degree}</p>
            <p>{education.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education;