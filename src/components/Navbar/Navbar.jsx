import React, { useState } from 'react'
import './Navbar.scss';

import { images } from '../../constrants';
import GlobalButton from '../GlobalButton/GlobalButton';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
    RiArrowDropDownLine
} from 'react-icons/ri';





export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const propData = [
        {
            path: "faq",
            title: "FaQ"
        },
        {
            path: "pricing",
            title: "Pricing"
        },
        {
            path: "*",
            title: "404"
        }
    ]


    const style = { color: "Black", fontSize: "3em", }

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
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/service">Service</Link>
                    </li>
                    <li>
                        <Popup
                            trigger={<button className="nav-btn">
                                Trigger
                                <RiArrowDropDownLine />
                            </button>}
                            position="bottom center">

                            <div>
                                <Dropdown propsData={propData} size={"15"} style={style}/>
                            </div>
                        </Popup>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <!-- signup | login --> */}
                <ul class="auth-links">
                    <GlobalButton children={"Hire!"} />
                </ul>
            </div>
            <hr />
        </nav>
    )
}
