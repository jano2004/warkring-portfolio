import React, { useEffect, useState } from 'react';
import {style} from './style';

import Header from '../../../../../Header/Header';
import Menu from '../../../../../Header/Menu/Menu';

import Container from '../../Atoms/Container/Container';
import Area from '../../Atoms/Area/Area';
import Heading from '../../Atoms/Heading/Heading';
import CallToButton from '../../Atoms/CallToButton/CallToButton';

export function HeaderSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []); 

    const handleMenuMobileClick = () => {
      setMenu(!menu);
    }

    const mobileMenuStyle = {
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      transform: menu ? 'translateX(0)' : 'translateX(-100%)', // Dynamically set transform
    };

    return (
      <div style={{scrollSnapAlign: 'start', height: '100vh'}}>
        <Header handleMenuMobileClick={handleMenuMobileClick}/>
        <div className={`mobileMenu ${menu ? 'active' : ''}`} style={mobileMenuStyle}>
            {menu && <Menu currentSelected={'home'} />}
        </div>

        <Area style={style.sloganSection}>
          <div style={style.availableLamp}/>
          <p style={style.sloganText}>
            Freie Kapazitäten für Juli/2024
          </p>
        </Area>

        <Area style={style.headerSection}>
          <div style={style.headerContent}>
            <Container style={style.headerBrandContainer}>
              <Heading type={'h1'} isLoaded={isLoaded}>warkring.org</Heading>
              <p style={style.headerBrandText}>professionelle <span style={style.textSpan}>Webseiten</span> für Ihren Online-Auftritt</p>
            </Container>

            <Container style={style.callContainer} isLoaded={isLoaded}>
              <Heading type={'h2'} isLoaded={isLoaded}>Kontaktieren Sie uns jetzt und lassen sich beraten!</Heading>
              <CallToButton style={style.callButton} target={'/kontakt'}>Jetzt Starten</CallToButton>
            </Container>
          </div>
        </Area>
      </div>
    );
}