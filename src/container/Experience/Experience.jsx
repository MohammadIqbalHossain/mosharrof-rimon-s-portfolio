import React from 'react'
import './Experience.scss';

export default function Experience() {

  const expData = [
    {
      year: "2016",
      institute: "RMIT UNIVERSITY",
      degree: "Bachelor Degree of Design"
    },
    {
      year: "2016",
      institute: "RMIT UNIVERSITY",
      degree: "Bachelor Degree of Design"
    },
    {
      year: "2016",
      institute: "RMIT UNIVERSITY",
      degree: "Bachelor Degree of Design"
    },
    {
      year: "2016",
      institute: "RMIT UNIVERSITY",
      degree: "Bachelor Degree of Design"
    },
    {
      year: "2016",
      institute: "RMIT UNIVERSITY",
      degree: "Bachelor Degree of Design"
    },
  ]

  return (
    <div>
         <h1>Education & Experience</h1>
      {expData.map((item, index) =>
        <div>
          <div key={index} className="expContainer">
            <div className="degree">
              <small>{item.year}</small>
              <span>{item.degree}</span>
            </div>
            <div className="institute">
              <span>{item.institute}</span>
            </div>
          </div>
          <hr className="hr-line"/>
        </div>

      )}



    </div>
  )
}
