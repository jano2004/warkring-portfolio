import {serviceData} from './ServiceData';
import RenderServicePack from './Service/Service'
import './Service/CustomService.css'
import RenderCustomService from './Service/CustomService';

function Services() {
    return(
        <div className='main_service_container'>
            {serviceData.map((pack, index) =>
                <RenderServicePack pack={pack} index={index} />
            )}
            <RenderCustomService />
        </div>
    )
}

export default Services;