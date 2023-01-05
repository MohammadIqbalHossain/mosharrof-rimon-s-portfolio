import React from 'react'
import './Advantages.scss';

import { images } from '../../constrants/index';


export default function Advantages() {
  const advantageObj = [
    {
      title: "Figma",
      img: images.htmlIcon
    },
    {
      title: "Figma",
      img: images.htmlIcon
    },
    {
      title: "Figma",
      img: images.htmlIcon
    },
    {
      title: "Figma",
      img: images.htmlIcon
    },
    {
      title: "Figma",
      img: images.htmlIcon
    },
    {
      title: "Figma",
      img: images.htmlIcon
    }
  ]

  return (
    <div>

      <h1>Advantages</h1>

      <div className="advContainer">
        {advantageObj.map((item, index) =>
          <div key={index} className="advItems">
            <h1>{item.title}
              <img src={item.img} alt="" />
            </h1>
          </div>
        )}
      </div>

    </div>
  )
}
