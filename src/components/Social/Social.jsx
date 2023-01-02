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
                    <a href="#"><FaTiktok /></a>
                </li>
                <li>
                    <a href="#"><BsBehance /></a>
                </li>
                <li>
                    <a href="#"><AiFillInstagram /></a>
                </li>
                <li>
                    <a href="#"><AiOutlineDribbble /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social