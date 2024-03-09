import React, { useState } from 'react';
import './FeatureSlide.css';

function FeatureSlide(props) {
    const backgroundStyle = {
        backgroundImage: props.featureData.backgroundImage
    };

    const [isHovered, setIsHovered] = useState(false);
    const defaultBackground = {
        backgroundColor: props.featureData.background,
        boxShadow: props.featureData.boxShadow
    };

    return (
        <div className="Main_FeatureSlide_Container"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <div className="Main_FeatureSlide_Top" style={defaultBackground}>
                <p className="Main_FeatureSlide_Top_Header">{props.featureData.type}</p>
                <p className="Main_FeatureSlide_Top_Text">{props.featureData.name}</p>
            </div>
            <div className="Main_FeatureSlide_Bottom">
                <p>{props.featureData.text}</p>
            </div>
        </div>
    );
}

export default FeatureSlide;
