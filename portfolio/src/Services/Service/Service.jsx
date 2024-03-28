import {serviceData} from '../ServiceData';
import './Service.css';

function Features({pack}){
    return (
        <div className='main_service_features_container'>
            <ul>
                {pack.map((feature, index) => (
                    <li key={index}>
                        {feature.featureName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function RenderServicePack({ pack, index }) {
    return (
        <div className='main_service_pack_container' key={index}>
            <h1>{pack.packName}</h1>
            <div className='main_service_pack_content_container'>
                <div className='main_service_description_container'>
                    <p>{pack.packDescription}</p>
                </div>
                <div className='main_service_features_and_pricing_container'>
                    <Features pack={serviceData[index].packFeatures} />
                    <div className='main_service_pricing_button_container'>
                        <p>{serviceData[index].packPrice}<span>,-€</span></p>
                        <button>JETZT BESTELLEN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderServicePack;