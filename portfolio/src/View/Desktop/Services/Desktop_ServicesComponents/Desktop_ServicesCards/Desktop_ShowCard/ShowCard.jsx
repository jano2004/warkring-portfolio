import './ShowCard.css'

function ShowCard({service}) {
    let themeClass = '';
    if (service.serviceName === 'Advanced') {
        themeClass = 'theme_advanced';
    } else if (service.serviceName === 'Premium') {
        themeClass = 'theme_premium';
    } else {
        themeClass = 'theme_basic';
    }

    return(
        <div className={`showCard_container ${themeClass}`}>
            <div className="showCard_header">
                <div className="showCard_header_price">
                    <p>{service.servicePrice}<span>,-€</span></p>
                </div>
            </div> 
            <div className="showCard_content">
                <div className="showCard_heading">
                    <h1>{service.serviceName}</h1>
                </div>
                <div className="showCard_description">
                    <p>{service.serviceDescription}</p>
                </div>
                <div className="showCard_button">
                    <button>Jetzt Bestellen</button>
                </div>
            </div>
        </div>
    )
}

export default ShowCard;