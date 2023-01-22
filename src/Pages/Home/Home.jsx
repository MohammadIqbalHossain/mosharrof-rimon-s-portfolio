import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import NavFooter from '../../components/Navbar/NavFooter';


import {
    Advantages,
    Header,
    Footer,
    Experience,
    Feature,
    Testimonial,
    Work,
}
    from '../../container/index';

function Home() {
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
            <Header />
            <Feature />
            <Advantages />
            <Experience />
            <Work />
            <Testimonial />
            {showSection && <Footer />}
            <NavFooter />
        </div>
    )
}

export default Home