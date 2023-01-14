import React from 'react'
import { Link } from 'react-router-dom';
import './Dropdown.scss';

function Dropdown({ propsData }) {

    return (
        <div>
            <li className="dropdown-container">
                {propsData.map((item) => (
                    <Link className="link-item" to={`/${item.path}`}>{item.title}</Link>
                ))}
            </li>
        </div>
    )
}

export default Dropdown