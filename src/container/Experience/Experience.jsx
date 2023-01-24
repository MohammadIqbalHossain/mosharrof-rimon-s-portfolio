import React from 'react'
import './Experience.scss';

export default function Experience() {

  const expData = [
    {
      year: "2018",
      institute: "RMIT UNIVERSITY",
      degree: "MSC"
    },
    {
      year: "2016",
      institute: "University of Chittagong",
      degree: "Bachelor Degree of Design"
    },
    {
      year: "2012",
      institute: "Nazirhat College",
      degree: "HSC - Higher Secondary Certificate"
    },
    {
      year: "2010",
      institute: "Fatikchhari coronation govt. high school.",
      degree: "SSC - Secondary School certificate."
    },
  ]

  return (
    <div>
      <h1 className="expTitle">Education & Experience</h1>
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
          <hr className="hr-line" />
        </div>

      )}



    </div>
  )
}
