import React, { useEffect, useState } from 'react'
import './Advantages.scss';

import { images } from '../../constrants/index';



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

  const [style, setStyle] = useState({});
  var [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        console.log(count);
        const newProgress = {
          opacity: 1,
          width: `${count + 1}%`
        };
        setStyle(newProgress);
        setCount(count + 1);
      }
    }, 50);
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
            </h1>

            <div class="progress">
              <div class="progress-done" style={style}>
                {count}%
              </div>
            </div>
          </div>

        )}
      </div>

    </div>
  )
}
