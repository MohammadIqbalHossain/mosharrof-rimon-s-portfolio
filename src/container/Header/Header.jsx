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


      <div className="tags-container">
        <div>
            <div className="tags">*</div>
            <div className="tags">Web desiner</div>
            <div className="tags">Web developer</div>
            <div className="tags">Content writer</div>
        </div>

        <div>

        </div>

        <div>

        </div>
      </div>

    </div>
  )
}
