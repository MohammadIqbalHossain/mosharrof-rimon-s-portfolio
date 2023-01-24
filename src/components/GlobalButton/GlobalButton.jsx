import React from 'react'

import './GlobalButton.scss';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function GlobalButton({ children }) {
    return (
        <div className="btn-container">
            <button className="app__button">
                <Link to="/contact">{children}</Link>
                <BsArrowUpRight className="arrow" />
            </button>
        </div>

    )
}

export default GlobalButton