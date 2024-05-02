import React, { useState } from 'react';

import "./Desktop_ServicesCards.css";
import ShowCard from "./Desktop_ShowCard/ShowCard";
import {servicesData} from '../../ServiceData'

function ServicesCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    };

    const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
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
                                <ShowCard service={servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length]} />
                            </div>
                        </div>
                        <div className="desktop_cards_slide_middle">
                               <ShowCard service={servicesData[currentIndex]} />
                        </div>
                        <div className="desktop_cards_slide_right">
                            <div className="slide-button-container">
                                <button onClick={nextCard}>next</button>
                            </div>
                            <div className='desktop_card_right'>
                                <ShowCard service={servicesData[(currentIndex + 1) % servicesData.length]} />
                            </div>
                        </div>
                    </div>
                    <div className="desktop_cards_slide_footer">
                        <div className='desktop_cards_slide_footer_selection'>
                            <div className='desktop_cards_slide_footer_selection_first'>
                                <p>Ausgewählt: </p>
                            </div>
                            <div className='desktop_cards_slide_footer_selection_second'>
                                <p>{servicesData[(currentIndex + 1) % servicesData.length].serviceName}</p>
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
