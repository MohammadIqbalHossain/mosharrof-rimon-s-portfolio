import React, { useEffect, useState } from 'react'
import { Footer, Work } from '../../container';
import { FaGreaterThan } from 'react-icons/fa';

import './Portfolio.scss';
import NavFooter from '../../components/Navbar/NavFooter';


function Portfolio() {
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
                    <span>Portfolio</span>
                </div>
                <h1>Portfolio</h1>
            </div>

            <Work />
            {showSection && <Footer />}
            <NavFooter />
        </div>
    )
}

export default Portfolio