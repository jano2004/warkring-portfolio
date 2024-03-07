import './FeatureSlide.css';

function FeatureSlide(props) {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(200deg, ${props.featureData.colorOne}, ${props.featureData.colorTwo}), linear-gradient(300deg, ${props.featureData.colorThree}, ${props.featureData.colorOne}), linear-gradient(0deg, ${props.featureData.colorTwo}, ${props.featureData.colorThree}), linear-gradient(500deg, rgba(171, 152, 239, 0.25), ${props.featureData.colorOne})`
    };

    return (
        <div className="Main_FeatureSlide_Container">
            <div className="Main_FeatureSlide_Top" style={backgroundStyle}>
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
