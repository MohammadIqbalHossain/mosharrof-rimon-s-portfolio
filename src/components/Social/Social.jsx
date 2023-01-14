import React from 'react'

import './Social.scss';
import { AiFillInstagram, AiOutlineDribbble } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { BsBehance } from 'react-icons/bs';





function Social() {
    return (
        <div>
            <ul className="app__social">
                <li>
                    <a href="#" className="glow-on-hover"><FaTiktok /></a>
                </li>
                <li>
                    <a href="#" className="glow-on-hover"><BsBehance /></a>
                </li>
                <li>
                    <a href="#" className="glow-on-hover"><AiFillInstagram /></a>
                </li>
                <li>
                    <a href="#" className="glow-on-hover"><AiOutlineDribbble /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social