import React from 'react'
import './Advantages.scss';

import { images } from '../../constrants/index';
import { FaEbay } from 'react-icons/fa';


export default function Advantages() {
  const advantageObj = [
    {
      title: "HTML",
      img: images.htmlIcon
    },
    {
      title: "Wordpress",
      img: images.wordpress
    },
    {
      title: "Elementor",
      img: images.elementor
    },
    {
      title: "Ebay",
      img: images.ebay
    },
    {
      title: "JavaScript",
      img: images.js
    },
    {
      title: "CSS",
      img: images.css
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
