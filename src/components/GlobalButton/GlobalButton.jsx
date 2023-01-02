import React from 'react'

import './GlobalButton.scss';
import { BsArrowUpRight } from 'react-icons/bs';

function GlobalButton({ children }) {
    return (
        <div className="btn-container">
            <button className="app__button">{children}
                <BsArrowUpRight className="arrow" />
            </button>
        </div>

    )
}

export default GlobalButton