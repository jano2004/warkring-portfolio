import React, { useState } from 'react';

import "./Desktop_ServicesCards.css";
import ShowCard from "./Desktop_ShowCard/ShowCard";
import {serviceData} from '../../ServiceData'

function ServicesCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    };

    const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceData.length) % serviceData.length);
    };

    return(
        <section className="desktop_cards_container">
            <div className="desktop_cards_content">
                <div className="desktop_cards_header">
                    <h1>Wählen Sie aus</h1>
                </div>
                <div className="desktop_cards_slide_container">
                    <div className="desktop_cards_slide_content">
                        <div className="desktop_cards_slide_left">
                            <div className="slide-button-container">
                                <button onClick={prevCard}>prev</button>
                            </div>
                            <div className='desktop_card_left'>
                                <ShowCard pack={serviceData[currentIndex]} />
                            </div>
                        </div>
                        <div className="desktop_cards_slide_middle">
                               <ShowCard pack={serviceData[(currentIndex + 1) % serviceData.length]} />
                        </div>
                        <div className="desktop_cards_slide_right">
                            <div className="slide-button-container">
                                <button onClick={nextCard}>next</button>
                            </div>
                            <div className='desktop_card_right'>
                                <ShowCard pack={serviceData[(currentIndex - 1 + serviceData.length) % serviceData.length]} />
                            </div>
                        </div>
                    </div>
                    <div className="desktop_cards_slide_footer">
                        <div className='desktop_cards_slide_footer_selection'>
                            <div className='desktop_cards_slide_footer_selection_first'>
                                <p>Ausgewählt: </p>
                            </div>
                            <div className='desktop_cards_slide_footer_selection_second'>
                                <p>{serviceData[(currentIndex + 1) % serviceData.length].packName}</p>
                            </div>
                        </div>
                        <div className='desktop_cards_slide_footer_compare'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesCards;
