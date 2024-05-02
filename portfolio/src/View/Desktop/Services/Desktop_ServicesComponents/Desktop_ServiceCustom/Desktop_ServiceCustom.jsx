import './Desktop_ServiceCustom.css';

function ServiceCustom(){
    return (
        <div className='desktop_custom_container'>
            <div className='desktop_custom_content'>
                <div className='desktop_custom_header'>
                    <h1>Warkring Custom</h1>
                </div>
                <div className='desktop_custom_card'>
                    <div className='desktop_custom_card_features'>
                        <div className='advanced-features'>
                            <h2>Advanced-Features:</h2>
                            <div>
                                <p>Feature 1</p>
                            </div>
                            <div>
                                <p>Feature 2</p>
                            </div>
                            <div>
                                <p>Feature 3</p>
                            </div>
                        </div>
                        <div className='premium-features'>
                        <h2>Premium-Features:</h2>
                            <div>
                                <p>Feature 1</p>
                            </div>
                            <div>
                                <p>Feature 2</p>
                            </div>
                            <div>
                                <p>Feature 3</p>
                            </div>
                        </div>
                    </div>
                    <div className='desktop_custom_card_description'>
                        <div className='desktop_custom_card_description_text'>
                            <p>Erweitern Sie Ihr Basic-Paket nur mit den Features die Sie auch wirklich benötigen.</p>
                        </div>
                        <div className='desktop_custom_card_description_pricing'>
                            <div className='desktop_custom_card_description_pricing_selection'>
                                <p>6 Features ausgewählt</p>
                                <hr />
                            </div>
                            <div className='desktop_custom_card_description_pricing_price'>
                                <div className='desktop_custom_card_description_pricing_price_main'>
                                    <p>599<span>,-€</span></p>
                                    <button>Jetzt bestellen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCustom;