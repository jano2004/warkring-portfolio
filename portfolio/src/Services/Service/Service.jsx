
function Service({serviceData}){
    let first = 0;
    let last = serviceData.length-1;
    return (
        <div>
            <h1>{serviceData[first]}</h1>
            <ul>
                {serviceData.map((item, index) => {
                    return index > first && index < last ? <li key={index}>{item}</li> : null;
                })}
            </ul>
            <p>{serviceData[last]}</p>
        </div>

    )
}

export default Service;