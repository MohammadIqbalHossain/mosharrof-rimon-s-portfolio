import React from 'react'
import './Feature.scss';

import { images } from '../../constrants/index'

export default function Feature() {
  return (
    <div className="feature-container">
      <div className="feature-1">
        <div>
          <img src={images.feature1} alt="feature1" />
        </div>
        <div>
          <h1>Feature One</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry and has been the industry standard dummy</p>
        </div>
      </div>

      <div className="feature-2">
        <div className='feature-order'>
          <h1>Feature Two</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry and has been the industry standard dummy</p>
        </div>
        <div>
          <img src={images.feature2} alt="feature1" />
        </div>
      </div>

      <div className="feature-3">
        <div>
          <img src={images.feature3} alt="feature1" />
        </div>
        <div>
          <h1>Feature Three</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry and has been the industry standard dummy</p>
        </div>
      </div>
    </div>
  )
}
