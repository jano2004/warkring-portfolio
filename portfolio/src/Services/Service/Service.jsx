import './Service.css';
function Service({serviceData}){
    return (
        <>
            <ul>
                {serviceData.map((feature, index) => (
                    <li key={index}>
                        {feature.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Service;