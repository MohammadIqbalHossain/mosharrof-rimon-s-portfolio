import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../constrants';


import './Work.scss';

function Work() {

  const workData = [
    {
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      title: "Smart Watch",
      category: "Showcase",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://source.unsplash.com/5VXH4RG88gc",
      title: "Smart Watch",
      category: "Showcase",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      title: "Smart Watch",
      category: "Showcase",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      title: "Smart Watch",
      category: "Showcase",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      title: "Smart Watch",
      category: "Showcase",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://i0.wp.com/themes.svn.wordpress.org/kadence/1.1.31/screenshot.png?w=572&strip=all",
      title: "Smart Watch not",
      category: "Showcase not",
      link: "https://modelmannequin.com/"
    }
  ]

  const imgContent = document.querySelectorAll('.img-content-hover');

  function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
      let x = e.pageX;
      let y = e.pageY;
      imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };


  return (
    <section className="gallery">
      <div className="container">
        <h1 className="hot-title">Latest works</h1>
        <div className="grid" >
          {workData.map((item, index) =>
            <a target="__Blank" href={item.link} class="color-overlay" onMouseEnter={showImgContent}>
              <figure class="img-container-w">
                <img className="img" src={item.img} alt="" />
                <figcaption class="img-content">
                  <h2 class="title">{item.title}</h2>
                  <h3 class="category">{item.category}</h3>
                </figcaption>
                <span class="img-content-hover">
                  <h2 class="title">{item.title}</h2>
                  <h3 class="category">{item.category}</h3>
                </span>
              </figure>
            </a>
          )}

        </div>
      </div>
    </section>

  )
}

export default Work