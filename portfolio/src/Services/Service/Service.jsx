import './Service.css';
function Service({serviceData}){
    let first = 0;
    let last = serviceData.length-1;
    return (
        <div className="main_service_container">
            <h1>{serviceData[first]}</h1>
            <ul>
                {serviceData.map((item, index) => {
                    return index > first && index < last ? <li key={index}>{item}</li> : null;
                })}
            </ul>
            <div className="main_service_pricing_button">
                <p>{serviceData[last]}</p>
                <button>BESTELLEN</button>
            </div>
        </div>
    )
}

export default Service;