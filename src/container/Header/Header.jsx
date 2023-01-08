import React from 'react'
import './Header.scss';

import { images } from '../../constrants';
import Social from '../../components/Social/Social';

export default function Header() {
  return (
    <div>

      <div className="app__header-container">
        <div className="app__header-content">
          <h1>Evay &<br />  Shopify <br /> Expert</h1>
          <img src={images.zigzag} alt="zigzagImage" />
          <div className="app__owner-experiance">
            <div>
              <h1>3</h1>
              <p>YEARS OF <br />
                EXPERIENCE</p>
            </div>

            <div>
              <h1>78</h1>
              <p>Projecys <br /> Done</p>
            </div>
          </div>
        </div>

        <div className="app__ownerImg-container">
          <img className="ownerImage" src={images.owner} alt="ownerImage" />
        </div>

        <div className="app__header-rContent">
          <div>*</div>
          <p>I’m Rimon, an Evay & Shopify web Designer based in Bangladesh. I'm making product and design minimal modern</p>

          <div className="social-icons">
            <Social />
          </div>
        </div>
      </div>


      <div className="app__header-sContainer">
        <div className="tags-container">
          <div className="tags-1"><span>*</span></div>
          <div className="tags-2"><span>Evay desiner</span></div>
          <br />
          <div className="tags-3"><span>Wordpress developer</span></div>
          <div className="tags-4"><span>Content writer</span></div>
          <div className="tags-5"><span>UI Designer</span></div>
          <div className="tags-6"><span>Shopify expert</span></div>
        </div>

        <div className="contact-info">
          <span>*HIRE ME!</span>
          <h1>Bangladesh, Chattogram
          rimonahsantvi@gmail.com
            +880 1812-792321</h1>
        </div>

        <div className="rounded-img">
           <img src={images.roundedImg} alt="" />
        </div>
      </div>
      
      <hr className="line"/>
    </div>
  )
}
