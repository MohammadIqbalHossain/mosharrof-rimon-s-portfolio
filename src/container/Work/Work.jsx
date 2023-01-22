import React from 'react'
import './Work.scss';

function Work() {
  const workData = [
    {
      img: "https://sceptermarketing.com/wp-content/uploads/2018/03/64439-big.jpg",
      title: "Tzupa",
      category: "Home for Jewelleries",
      link: "https://tzufa.com/"
    },
    {
      img: "https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-fashion-website-templates-1000x750.jpg",
      title: "Sammys natuarals",
      category: "SHOP THE COLLECTION",
      link: "https://adynelcreations.myshopify.com/"
    },
    {
      img: "https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
      title: "Denoze",
      category: "Shop smarter, not harder",
      link: "https://www.denoz.de/"
    },
    {
      img: "https://assets.awwwards.com/awards/submissions/2018/12/5c07cf1e427d3.png",
      title: "Modelmaniquin",
      category: "Elevate your style, Express yourself.",
      link: "https://modelmannequin.com/"
    },
    {
      img: "https://img.freepik.com/free-psd/e-commerce-furniture-landing-page_197582-336.jpg?w=2000",
      title: "Bite into the best, Moskbite",
      category: "Showcase",
      link: "https://moskbite.com/products/children-double-bed-bunk-sleeper"
    },
    {
      img: "https://cdn.dribbble.com/users/4053754/screenshots/17542177/video.png?compress=1&resize=400x300",
      title: "MVapeFans",
      category: "Smoothly switch to vaping, with us.",
      link: "https://mvapefans.com/"
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
      <h1 className="section-title">Latest works</h1>
      <div className="work-container">
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