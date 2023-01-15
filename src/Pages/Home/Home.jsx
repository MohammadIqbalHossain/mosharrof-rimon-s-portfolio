import React from 'react'


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
    return (
        <div>
            <Header />
            <Feature />
            <Advantages />
            <Experience />
            <Work />
            <Testimonial />
            {/* <Footer /> */}
         
        </div>
    )
}

export default Home