import React from 'react';
import './FeatureSlide.css';

function FeatureSlide(props) {
    const defaultBackground = {
        background: props.featureData.background
    };

    return (
        <div className="Main_FeatureSlide_Container">
            <div className="wave" style={defaultBackground}></div>
            <div className="wave" style={defaultBackground}></div>
            <div className="wave" style={defaultBackground}></div>
            <div className="Main_FeatureSlide_Top">
                <div className="Main_FeatureSlide_Text">
                    <p className="Main_FeatureSlide_Top_Header">{props.featureData.type}</p>
                    <p className="Main_FeatureSlide_Top_Text">{props.featureData.name}</p>
                </div>
            </div>
            <div className="Main_FeatureSlide_Bottom">
                <p>{props.featureData.text}</p>
            </div>
        </div>
    );
}

export default FeatureSlide;
