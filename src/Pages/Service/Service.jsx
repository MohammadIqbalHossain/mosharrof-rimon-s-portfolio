import React, { useEffect, useState } from 'react';
import './Service.scss';
import { FaGreaterThan } from 'react-icons/fa';
import ServiceFeature from '../../components/ServiceFeature/ServiceFeature';
import Tools from '../../components/Tools/Tools';
import { Feature, Footer } from '../../container';
import Accordion from '../../container/Accordion/Accordion';

function Service() {

  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1100) {
        setShowSection(true);
      } else {
        setShowSection(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Tools />
        <Feature />
        <Accordion />
      </div>

      {showSection && <Footer />}
    </div>
  )
}

export default Service