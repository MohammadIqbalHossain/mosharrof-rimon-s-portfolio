import React, { useEffect, useState } from 'react'
import './Advantages.scss';
import { images } from '../../constrants/index';

export default function Advantages() {

  const [htmlCount, setHtmlCount] = useState(0);
  const [wordpressCount, setWordpressCount] = useState(0);
  const [elementorCount, setElementorCount] = useState(0);
  const [ebayCount, setEbayCount] = useState(0);
  const [javaScriptCount, setJavaScriptCount] = useState(0);
  const [cssCount, setCssCount] = useState(0);


  const advantageObj = [
    {
      title: "HTML",
      img: images.htmlIcon,
      count: 50,
      stateVar: htmlCount,
    },
    {
      title: "Wordpress",
      img: images.wordpress,
      count: 50,
      stateVar: wordpressCount,
    },
    {
      title: "Elementor",
      img: images.elementor,
      count: 50,
      stateVar: elementorCount,
    },
    {
      title: "Ebay",
      img: images.ebay,
      count: 89,
      stateVar: ebayCount
    },
    {
      title: "JavaScript",
      img: images.js,
      count: 50,
      stateVar: javaScriptCount
    },
    {
      title: "CSS",
      img: images.css,
      count: 78,
      stateVar: cssCount
    }
  ]

  const integer = advantageObj.map(int => int.count);
  console.log(integer)

  useEffect(() => {
    const interval = setInterval(() => {
      if (htmlCount < 90) {
        setHtmlCount(htmlCount + 1);
      }
      if (wordpressCount < 97) {
        setWordpressCount(wordpressCount + 1)
      }
      if (ebayCount < 98) {
        setEbayCount(ebayCount + 1);
      }
      if (elementorCount < 96) {
        setElementorCount(elementorCount + 1);
      }
      if (javaScriptCount < 75) {
        setJavaScriptCount(javaScriptCount + 1);
      }
      if (cssCount < 89) {
        setCssCount(cssCount + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [htmlCount, wordpressCount, cssCount, javaScriptCount, elementorCount, ebayCount]);

  return (
    <div>
      <h1 className="section-title">Advantages</h1>
      <div className="advContainer">
        {advantageObj.map((item, index) =>
          <div key={index} className="advItems">
            <h1>
              <img src={item.img} alt="" />
              <div class="progress-done">
                <span className="progress-count">{item.stateVar}%</span>
              </div>
              {item.title}
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
