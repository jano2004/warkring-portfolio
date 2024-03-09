import './FeatureDesign.css';
import SequrityImage from '../Images/SeqImage.png';
import ResponsiveImage from '../Images/ResImage.png';

function FeatureDesign() {
    return (
        <div className="Main_FeatureDesign_Container">
            <div className="FeatureDesign_Container">
                <div className="FeatureDesign_Left">
                    <img src={SequrityImage} alt="seqImage"/>
                </div>
                <div className="FeatureDesign_Right">
                    <img src={ResponsiveImage} alt="resImage"/>
                </div>
            </div>
        </div>
    )
}

export default FeatureDesign;