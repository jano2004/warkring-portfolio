import './FeatureSlides.css';
import FeatureSlide from './FeatureSlide/FeatureSlide';
import { featureSlideData } from './FeatureSlide/FeatureSlideData';

function FeatureSlides() {
    return (
        <div className="Main_Features">
            <div className="Feature_Text_Button">
                <div className="Feature_Text">
                    <p>UNSERE FEATURES</p>
                </div>
                <div className="Feature_Button">
                    <button>ALLE FEATURES</button>
                </div>
            </div>
            <div className="Main_FeatureSlides_Container">
                <div className="FeaturesSlides_Container">
                    {featureSlideData.map((item, index) => (
                        <FeatureSlide key={index} featureData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureSlides;