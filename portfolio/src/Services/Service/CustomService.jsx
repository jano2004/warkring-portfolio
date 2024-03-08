import '../Service/CustomService.css'
import {addOnFeatures} from '../ServiceData';
import {basicFeatures} from '../ServiceData';


function showAddOns(feature, index) {
    return (
        <div className='custom_service_options_option_container'>
            <div className='custom_service_options_option_button'>
                <button>O</button>
            </div>
            <p key={index}>
                {feature.featureName}
            </p>
        </div>
    );
}

function RenderCustomService() {
    return(
        <div className='main_service_container'>
            <div className='custom_service_container'>
                <h1>BENUTZERDEFINIERT</h1>
                <div className='custom_service_content_container'>
                    <div className='custom_service_options_container'>
                            {addOnFeatures.map((feature, index) => showAddOns(feature, index))}
                    </div>
                    <div className='custom_service_description_and_pricing_container'>
                        <div className='custom_service_description_container'>
                            <div className='custom_service_description_text'> 
                            <p>Erweitern Sie Ihr <span>Basic-Paket</span> nur mit den Features die Sie auch wirklich benötigen</p>
                            </div>
                            <div className='custom_service_description_features'>
                                <p>Basic-Features:</p>
                                <ul>
                                    {basicFeatures.slice(0, 3).map((feature, index) => (
                                        <li key={index}>
                                            {feature.featureName}
                                        </li>
                                    ))}
                                    <li>...</li>
                                </ul>
                                <button>Mehr erfahren</button>
                            </div>
                        </div>
                        <div className='custom_service_pricing_button_container'>
                            <p>149,-€</p>
                            <button>JETZT BESTELLEN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderCustomService;