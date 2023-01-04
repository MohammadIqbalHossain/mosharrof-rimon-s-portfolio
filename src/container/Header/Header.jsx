import React from 'react'
import './Header.scss';

import { images } from '../../constrants';
import Social from '../../components/Social/Social';

export default function Header() {
  return (
    <div>

      <div className="app__header-container">
        <div className="app__header-content">
          <h1>Illustrator &<br />  Visual <br /> Designer</h1>
          <img src={images.zigzag} alt="zigzagImage" />
          <div className="app__owner-experiance">
            <div>
              <h1>6</h1>
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
          <p>I’m Ferdian, an Illustrator & Visual Designer based in Korea. I'm making product and design minimal modern</p>

          <div className="social-icons">
            <Social />
          </div>
        </div>
      </div>


      <div className="app__header-sContainer">
        <div className="tags-container">
          <div className="tags-1"><span>*</span></div>
          <div className="tags-2"><span>Web desiner</span></div>
          <div className="tags-3"><span>Web developer</span></div>
          <div className="tags-4"><span>Content writer</span></div>
          <div className="tags-5"><span>UI Designer</span></div>
          <div className="tags-6"><span>Shopify expert</span></div>
        </div>

        <div className="contact-info">
          <span>*HIRE ME!</span>
          <h1>Korea, Busan
            hi@domainexample.com
            +850 123 4567 890</h1>
        </div>

        <div className="rounded-img">
           <img src={images.roundedImg} alt="" />
        </div>
      </div>

    </div>
  )
}
