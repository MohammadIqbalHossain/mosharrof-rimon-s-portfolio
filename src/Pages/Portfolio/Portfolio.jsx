import React from 'react'
import { Footer, Work } from '../../container';
import { FaGreaterThan } from 'react-icons/fa';

import './Portfolio.scss';


function Portfolio() {
    return (
        <div>
            <div className="title">
                <div>
                    <span>Home</span>
                    <FaGreaterThan />
                    <span>Portfolio</span>
                </div>
                <h1>Portfolio</h1>
            </div>

            <Work />
            <Footer/>
        </div>
    )
}

export default Portfolio