import React, { useState, useRef, useEffect } from 'react';
import './MainServicesMobile.css';
import { services } from './Service/ServiceData';
import Service from './Service/Service';


function ShowScrollPage({ isActive }) {
    return (
        <button 
            className={isActive ? 'scroll_page_clicked' : 'scroll_page'}
        ></button>
    )
}

export default function MainServices() {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentContainerRef = containerRef.current;

            if (currentContainerRef) {
                const containerPosition = currentContainerRef.getBoundingClientRect().left;
                const containerWidth = currentContainerRef.getBoundingClientRect().width;

                for (let i = 0; i < currentContainerRef.children.length; i++) {
                    const element = currentContainerRef.children[i];
                    const elementPosition = element.getBoundingClientRect().left - containerPosition;
                    if (elementPosition >= 0 && elementPosition < containerWidth) {
                        setCurrentPage(i);
                        break;
                    }
                }
            }
        };

        const currentContainerRef = containerRef.current;

        if (currentContainerRef) {
            currentContainerRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentContainerRef) {
                currentContainerRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    
    return (
        <div className={'main_service_section'}>
            <p className={'main_service_top'}>services.</p>
            <div className={'main_services_container'} ref={containerRef}>
                {services.map((service, index) => (
                    <Service key={index} {...service} />
                ))}
            </div>
            <div className='main_service_page'>
                <div className='main_service_page_container'>
                    {[0, 1, 2].map(pageNumber => (
                        <ShowScrollPage 
                            key={pageNumber}
                            isActive={currentPage === pageNumber} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

