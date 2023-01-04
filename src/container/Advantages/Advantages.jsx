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
  // const html = images.htmlIcon;
  // const elementor = images.elementor;
  // const wordpress = images.wordpress;
  // const advImg = [html, elementor, wordpress]
  return (
    <div>

      <h1>Advantages</h1>

      {advantageObj.map((item, index) =>
        <div key={index} className="advItems">
            <h1>{item.title}</h1>
            <img src={item.img} alt="" />
        </div>
      )}

    </div>
  )
}
