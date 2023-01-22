import React, { useState } from 'react';

const DisplayAccordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className="question">{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            <hr />
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default DisplayAccordion;