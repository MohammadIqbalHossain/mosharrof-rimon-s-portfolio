import React, { useEffect, useState } from 'react'
import './Advantages.scss';

import { images } from '../../constrants/index';



export default function Advantages() {
  const advantageObj = [
    {
      title: "HTML",
      img: images.htmlIcon,
      count: 50
    },
    {
      title: "Wordpress",
      img: images.wordpress,
      count: 50
    },
    {
      title: "Elementor",
      img: images.elementor,
      count: 50
    },
    {
      title: "Ebay",
      img: images.ebay,
      count: 50
    },
    {
      title: "JavaScript",
      img: images.js,
      count: 50
    },
    {
      title: "CSS",
      img: images.css,
      count: 50
    }
  ]

  // const [style, setStyle] = useState({});
  var [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        console.log(count);
        setCount(count + 1);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>

      <h1>Advantages</h1>

      <div className="advContainer">
        {advantageObj.map((item, index) =>
          <div key={index} className="advItems">
            <h1>{item.title}
              <img src={item.img} alt="" />
              <div class="progress-done">
                {count}%
              </div>
            </h1>

          </div>
        )}
      </div>

    </div>
  )
}
