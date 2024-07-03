import {useEffect, useState} from "react";
import {style} from './style';

import CustomLink from "./Atoms/CustomLink/CustomLink";
import Container from "./Atoms/Container/Container";
import Header from "./Atoms/Header/Header";
import Description from "./Atoms/Description/Description";

export default function Body() {
    const [isLoaded, setIsLoaded] = useState(false);

    const content = {
        top: 'Webdesign und Entwicklung für B2B und B2P',
        bottom: {
            first: 'Webseiten für Verkauf', second: 'und Informationsverbreitung'
        }
    }

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <Container>
                    <Header type={'h2'} description={content.top}>
                        <p style={{margin: 0}}>
                            {content.top}
                        </p>
                    </Header>
                </Container>
                <Container>
                    <Header type={'h1'} description={content.top} isLoaded={isLoaded}>
                        <p style={{margin: 0}}> { content.bottom.first } <br></br> { content.bottom.second } </p>
                    </Header>
                </Container>
                <Container>
                    <Description isLoaded={isLoaded}/>
                </Container>
                <Container style={style.anfrage} isLoaded={isLoaded}>
                    <CustomLink destination={'kontakt'} description={'Kostenlose Website-Analyse'} style={style.button.analyse} />
                    <CustomLink destination={'kontakt'} description={'Neues Projekt anfragen'} style={style.button.anfrage} />
                </Container>
            </div>
        </div>
    )
}