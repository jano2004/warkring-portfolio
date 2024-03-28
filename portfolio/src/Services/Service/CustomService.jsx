import React, { useState, useEffect, useCallback } from 'react';
import '../Service/CustomService.css'
import {addOnFeatures} from '../ServiceData';
import {basicFeatures} from '../ServiceData';


function ShowAddOns({ feature, index, selectedFeatures, setSelectedFeatures }) {
    const [isRightAligned, setIsRightAligned] = useState(false);

    const toggleAlignment = () => {
        setIsRightAligned(!isRightAligned);
        if (!isRightAligned) {
            setSelectedFeatures([...selectedFeatures, feature.featurePrice]);
        } else {
            const indexOfFeatureToRemove = selectedFeatures.indexOf(feature.featurePrice);
            if (indexOfFeatureToRemove !== -1) {
                const updatedFeatures = [...selectedFeatures];
                updatedFeatures.splice(indexOfFeatureToRemove, 1);
                setSelectedFeatures(updatedFeatures);
            }
        }
    };

    return (
        <div className='custom_service_options_option_container'>
            <div className={`silde_button ${isRightAligned ? 'right' : ''}`}>
                <button onClick={toggleAlignment}></button>
            </div>
            <p>
                {feature.featureName}
            </p>
        </div>
    );
}

function RenderCustomService() {
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const customMinPrice = 499;

    const calculateTotalPrice = useCallback( () => {
        return selectedFeatures.reduce((total, price) => total + parseFloat(price), customMinPrice);
    }, [selectedFeatures, customMinPrice]);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [selectedFeatures, calculateTotalPrice]);

    useEffect(() => {
        if (totalPrice !== 0) {
            const timer = setTimeout(() => {
                document.getElementById('price').classList.add('animate');

                setTimeout(() => {
                    document.getElementById('price').classList.remove('animate');
                }, 250);
            }, 2);

            return () => clearTimeout(timer);
        }
    }, [totalPrice]);

    return(
        <div className='main_service_container'>
            <div className='custom_service_container'>
                <h1>BENUTZERDEFINIERT</h1>
                <div className='custom_service_content_container'>
                    <div className='custom_service_description'>
                        <p>Erweitern Sie Ihr <span>Basic-Paket</span> nur mit den Features die Sie auch wirklich benötigen</p>
                    </div>
                    <div className='custom_service_options_and_pricing_container'>
                        <div className='custom_service_options_container'>
                            {addOnFeatures.map((feature, index) => (
                                <ShowAddOns
                                    feature={feature}
                                    index={index}
                                    selectedFeatures={selectedFeatures}
                                    setSelectedFeatures={setSelectedFeatures}
                                />
                            ))}
                        </div>
                        <div className='custom_service_basic_and_pricing_container'>
                            <div className='custom_service_basic_container'>
                                <div className='custom_service_basic_features'>
                                    <p>Basic-Features:</p>
                                    <ul>
                                        {(showAllFeatures ? basicFeatures : basicFeatures.slice(0, 3)).map((feature, index) => (
                                            <li key={index}>
                                                {feature.featureName}
                                            </li>
                                        ))}
                                        {!showAllFeatures &&<li>...</li>}
                                    </ul>
                                    <button onClick={() => setShowAllFeatures(!showAllFeatures)}>
                                        {showAllFeatures ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                                    </button>
                                </div>
                            </div>
                            <div className='custom_service_pricing_button_container'>
                                <p id="price">{calculateTotalPrice()}<span>,-€</span></p>
                                <button>JETZT BESTELLEN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderCustomService;