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
      count: 89
    },
    {
      title: "JavaScript",
      img: images.js,
      count: 50
    },
    {
      title: "CSS",
      img: images.css,
      count: 78
    }
  ]

  // const [style, setStyle] = useState({});
  var [count, setCount] = useState(0);
  console.log(count);

  const integer = advantageObj.map(int => int.count);
  console.log(integer)

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < integer.length; i++) {
        if (count < integer[i]) {
          setCount(count + 1);
        }
      };
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="section-title">Advantages</h1>
      <div className="advContainer">
        {advantageObj.map((item, index) =>
          <div key={index} className="advItems">
            <h1>
              <img src={item.img} alt="" />
              <div class="progress-done">
                <span className="progress-count">{count}%</span>
              </div>
              {item.title}
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
