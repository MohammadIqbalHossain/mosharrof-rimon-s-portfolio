import React, { useState } from 'react'
import './Navbar.scss';

import { images } from '../../constrants';
import GlobalButton from '../GlobalButton/GlobalButton';
import { HiMenuAlt4 } from 'react-icons/hi';



export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)


    return (
        <nav id="nav">
            <div class="nav-center">
                {/* <!-- nav header --> */}
                <div class="nav-header">
                    <img src={images.logo} class="logo" alt="logo" />
                    <button class="nav-toggle">
                        <HiMenuAlt4 onClick={() => setNavOpen(!navOpen)} />
                    </button>
                </div>
                {/* <!-- links --> */}
                <ul className={navOpen ? "show-links" : "links"}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Page</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                {/* <!-- signup | login --> */}
                <ul class="auth-links">
                    <GlobalButton children={"Hire!"} />
                </ul>
            </div>
        </nav>
    )
}
