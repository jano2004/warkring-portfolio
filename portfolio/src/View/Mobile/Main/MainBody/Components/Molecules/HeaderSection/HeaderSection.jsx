import React, { useEffect, useState } from 'react';
import {style} from './style';

import Container from '../../Atoms/Container/Container';
import Area from '../../Atoms/Area/Area';
import Header from '../../Atoms/Header/Header';
import CallToButton from '../../Atoms/CallToButton/CallToButton';

export function HeaderSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []); 

    return (
      <>
      <Area style={style.sloganSection}>
        <div style={style.availableLamp}/>
        <p style={style.sloganText}>
          Freie Kapazitäten für Juli/2024
        </p>
      </Area>

      <Area style={style.headerSection}>
        <div style={style.headerContent}>
          <Container style={style.headerBrandContainer}>
            <Header type={'h1'} isLoaded={isLoaded}>warkring.org</Header>
            <p style={style.headerBrandText}>professionelle <span style={style.textSpan}>Webseiten</span> für Ihren Online-Auftritt</p>
          </Container>

          <Container style={style.callContainer} isLoaded={isLoaded}>
            <Header type={'h2'} isLoaded={isLoaded}>Kontaktieren Sie uns jetzt und lassen sich beraten!</Header>
            <CallToButton style={style.callButton} target={'/kontakt'}>Jetzt Starten</CallToButton>
          </Container>
        </div>
      </Area>
      </>
    );
}