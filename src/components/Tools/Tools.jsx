import React from 'react';
import './Tools.scss';

function Tools() {
    const serviceFeatureData = [
        {
            icon: "http://geosm.elmous.com/wp-content/uploads/2022/08/icon-2.png",
            title: "Feature one",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            icon: "http://geosm.elmous.com/wp-content/uploads/2022/08/icon-1.png",
            title: "Feature two",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            icon: "http://geosm.elmous.com/wp-content/uploads/2022/08/icon-4.png",
            title: "Feature three",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            icon: "http://geosm.elmous.com/wp-content/uploads/2022/08/icon-3.png",
            title: "Feature four",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
    ]

    return (
        <div>
            <div className="tools-container">
                {serviceFeatureData.map((item) => (
                    <div className="tools-item">
                        <img src={item.icon} alt="icon" />
                        <div className="content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools