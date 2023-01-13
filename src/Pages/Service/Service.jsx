import React from 'react';
import './Service.scss';
import { FaGreaterThan } from 'react-icons/fa';
import ServiceFeature from '../../container/ServiceFeature/ServiceFeature';

function Service() {
  return (
    <div>
      <div className="title">
        <div>
          <span>Home</span>
          <FaGreaterThan />
          <span>Graphic Design</span>
        </div>
        <h1>Graphic Design</h1>

        <p>Descriptive paragraph clients lorem ipsum dolor mediocritatem maiestatis tempor appareat epicurei voluptatibus usuanomittam this paragraph those who are looking out for reliable service</p>

        <img src="http://geosm.elmous.com/wp-content/uploads/elementor/thumbs/preview-pt5xvthez7ppjpm8lpix3enm2vcl3eo4uquvfm3tsw.jpg" alt="" />
      </div>

      <div>
        <ServiceFeature />
      </div>
    </div>
  )
}

export default Service