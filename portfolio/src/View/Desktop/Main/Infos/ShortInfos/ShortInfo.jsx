import React, { useState, useEffect } from 'react';

export default function ShortInfo() {
    const [activateFirst, setActivateFirst] = useState(false);
    const [activateSecond, setActivateSecond] = useState(false);
    const [activateThird, setActivateThird] = useState(false)


    const handleScroll = () => {
        if(window.scrollY >= window.innerHeight - (window.innerHeight - 130)) { setActivateFirst(true); }
        else { setActivateFirst(false); }

        if(window.scrollY >= window.innerHeight - (window.innerHeight - 330)) { setActivateSecond(true); }
        else { setActivateSecond(false) }

        if(window.scrollY >= window.innerHeight - (window.innerHeight - 530)) { setActivateThird(true); }
        else { setActivateThird(false) }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <div style={{...style.leftInfo, ...(activateFirst && style.leftInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>Gewünschtes Webdesign</h1>
                    <p style={{...style.infoText}}>
                        Modernes,
                        <p1 style={{fontWeight: '500'}}>ansprechendes Design</p1>,
                        das Ihre Markenidentität widerspiegelt und Ihre
                        <p1 style={{fontWeight: '500'}}>Zielgruppe anspricht.</p1>
                    </p>
                </div>
            </div>
            <div style={{...style.container}}>
                <div style={{...style.rightInfo, ...(activateSecond && style.rightInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>Professionelle Webentwicklung</h1>
                    <p style={{...style.infoText, width: '700px'}}>
                        Robuste und
                        <p1 style={{fontWeight: '500'}}> skalierbare Lösungen</p1>
                        , die auf
                        <p1 style={{fontWeight: '500'}}> neuesten Technologien </p1>
                        basieren und optimale Leistung garantieren.</p>
                </div>
            </div>
            <div style={{...style.container}}>
                <div style={{...style.leftInfo, ...(activateThird && style.leftInfoSlideIn)}}>
                    <h1 style={{...style.infoHeader}}>SEO und Digitales Marketing</h1>
                    <p style={{...style.infoText, width: '700px'}}>
                        Strategien, die Ihre <p1 style={{fontWeight: '500'}}> Sichtbarkeit verbessern </p1>
                        und den Traffic auf Ihrer Website erhöhen.
                    </p>
                </div>
            </div>
        </div>
    );
}

const style = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        userSelect: 'none'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        width: '70%',
        height: '200px',
        background: ''
    },
    leftInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '700px',
        opacity: 0,
        transform: 'translateX(50%)',
        transition: 'all 0.3s ease-in-out',
        background: ''
    },
    leftInfoSlideIn: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    rightInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '700px',
        opacity: 0,
        transform: 'translateX(-50%)',
        transition: 'all 0.3s ease-in-out',
        background: '',
    },
    rightInfoSlideIn: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    infoHeader: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '600',
        margin: '0',
        fontSize: '3rem',
        letterSpacing: '1.5px',
        color: '#529552',
        padding: '0 30px 0 30px',
        width: '800px',
        textAlign: 'center'
    },
    infoText: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '200',
        fontSize: '1.5rem',
        margin: '0',
        padding: '0 30px 0 30px',
        textAlign: 'center'
    },
}
