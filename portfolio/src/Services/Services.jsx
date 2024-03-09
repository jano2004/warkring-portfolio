import {serviceData} from './ServiceData';
import renderServicePack from './Service/Service'
import './Service/CustomService.css'
import RenderCustomService from './Service/CustomService';

function Services() {
    return(
        <div className='main_service_container'>
            {/*{serviceData.map((pack, index) => renderServicePack(pack, index))}*/}
            <RenderCustomService />
        </div>
    )
}

export default Services;