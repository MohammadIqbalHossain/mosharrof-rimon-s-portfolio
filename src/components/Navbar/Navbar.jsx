import React from 'react'
import './Navbar.scss';

import { images } from '../../constrants';



export default function Navbar() {
    return (
        <nav id="nav">
            <div class="nav-center">
                {/* <!-- nav header --> */}
                <div class="nav-header">
                    <img src={images.logo} class="logo" alt="logo" />
                    <button class="nav-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- links --> */}
                <ul class="links">
                    <li>
                        <button className="dropdown">Home</button>
                        <div className="dropdown-content">
                            <a href="#">Home-2</a>
                        </div>
                    </li>
                    <li>
                        <a href="#">Birthday carrds</a>
                    </li>
                    <li>
                        <a href="#">Feeling cards</a>
                    </li>
                    <li>
                        <a href="#">Anniversary cards</a>
                    </li>
                </ul>
                {/* <!-- signup | login --> */}
                <ul class="auth-links">
                    <li>
                        <a href="#">
                            Signup
                        </a>
                    </li>
                    <span>|</span>
                    <li>
                        <a href="#">
                            login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
