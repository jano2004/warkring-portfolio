import {serviceData} from './ServiceData';
import Service from './Service/Service'

function Services() {
    return(
        <div>
            {serviceData.map((item, index) => (
                <Service serviceData={serviceData[index]}/>
            ))}
        </div>
    )
}

export default Services;