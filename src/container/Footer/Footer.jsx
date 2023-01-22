import React from 'react'

import './Footer.scss';

import { images } from '../../constrants/index';

function Footer() {
  return (
    <div className="main-contaier">
      <div>
        {/* <span className="footer-hyphen">

        </span> */}
        <h1 className="footer-text">
          --- Let's take our relationship to the next level your business
        </h1>
      </div>
    
      <div className="imgContainer">
        <img src={images.footerImg} alt="footerImg" />
      </div>

      <div className="lower-textContainer">
        <span className="footer-upeer-text">*IQBAL ®</span>
        <h2>
          - I mistaken idea of lorem ipsum dolor mediocritatem
        </h2>
      </div>
    </div>
  )
}

export default Footer