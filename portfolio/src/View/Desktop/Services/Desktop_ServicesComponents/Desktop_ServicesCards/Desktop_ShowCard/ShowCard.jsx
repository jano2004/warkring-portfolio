import './ShowCard.css'

function ShowCard({pack}) {
    let themeClass = '';
    if (pack.packName === 'ADVANCED') {
        themeClass = 'theme_advanced';
    } else if (pack.packName === 'PREMIUM') {
        themeClass = 'theme_premium';
    } else {
        themeClass = 'theme_basic';
    }

    return(
        <div className={`showCard_container ${themeClass}`}>
            <div className="showCard_header">
                <div className="showCard_header_price">
                    <p>{pack.packPrice}<span>,-€</span></p>
                </div>
            </div> 
            <div className="showCard_content">
                <div className="showCard_heading">
                    <h1>{pack.packName}</h1>
                </div>
                <div className="showCard_description">
                    <p>{pack.packDescription}</p>
                </div>
                <div className="showCard_button">
                    <button>Jetzt Bestellen</button>
                </div>
            </div>
        </div>
    )
}

export default ShowCard;