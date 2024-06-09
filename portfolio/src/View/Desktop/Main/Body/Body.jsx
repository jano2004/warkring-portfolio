import { MdOutlineNavigateNext } from "react-icons/md";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Body() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const style = {
        main: {
            height: '0',
            width: '100%',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'center'
        },
        container: {
            width: '100%',
            height: '550px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            background: 'white',
            userSelect: 'none',
        },
        verfuegbarkeit: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '10px',
            height: '30px',
            width: 'auto',
            padding: '0 20px 0 20px',
            borderRadius: '20px',
            background: '#F4F5F5',
            overflowX: 'hidden'
        },
        verfuegbarkeitButtonText: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '200',
            margin: '0'
        },
        miniHeader: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '500',
            margin: '0',
            fontSize: '1.5rem'
        },
        mainHeader: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '400',
            margin: '0',
            fontSize: '3.5rem',
            textAlign: 'center',
            letterSpacing: '1.5px',
            transform: 'translateY(100%)',
            opacity: 0,
            transition: 'transform 0.7s ease-out, opacity 0.7s ease-out'
        },
        mainHeaderFlyIn: {
            transform: 'translateY(0)',
            opacity: 1
        },
        description: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '200',
            margin: '0',
            fontSize: '1.5rem',
            textAlign: 'center',
            transform: 'translateY(100%)',
            opacity: 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
        },
        descriptionFlyIn: {
            transform: 'translateY(0)',
            opacity: 1
        },
        anfrageContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            transform: 'translateY(100%)',
            opacity: 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        },
        anfrageContainerFlyIn: {
            transform: 'translateY(0)',
            opacity: 1
        },
        anfrageAnalyseButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '45px',
            width: 'auto',
            padding: '0 22px 0 22px',
            background: 'rgba(21,33,212,0.7)',
            borderRadius: '7px',
            cursor: 'pointer'
        },
        anfrageAnalyseButtonText: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            color: 'white',
            fontWeight: '400'
        },
        anfrageProjektButton: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        },
        p1: {
            fontWeight: '500',
            textAlign: 'center'
        },
        a: {
            fontWeight: '500',
            textDecoration: 'none',
            color: 'black',
            cursor: 'default'
        }
    }

    return (
        <div style={{...style.main}}>
            <div style={{...style.container}}>
                <div>
                    <p style={{...style.miniHeader}}>
                        Webdesign und Entwicklung für B2B und B2P
                    </p>
                </div>
                <div>
                    <p style={{...style.mainHeader, ...(isLoaded && style.mainHeaderFlyIn)}}>
                        Webseiten für Verkauf <br/>und Informationsverbreitung
                    </p>
                </div>
                <div>
                    <p style={{...style.description, ...(isLoaded && style.descriptionFlyIn)}}>
                        Wir erstellen Webseiten, die
                        <a style={{...style.a}} href={'hrefHanlder'}> deinen Ansprühen entsprechen.</a><br/>
                        Hebe dich ab
                        <a style={{...style.a}} href={'hrefHanlder'}> von deiner Konkurrenz </a>
                        mit individuellem Design und SEO
                    </p>
                </div>
                <div style={{...style.anfrageContainer, ...(isLoaded && style.anfrageContainerFlyIn)}}>
                    <Link to={'/kontakt'} style={{textDecoration: 'none'}}>
                        <div style={{...style.anfrageAnalyseButton}}>
                            <p style={{...style.anfrageAnalyseButtonText}}>Kostenlose Website-Analyse</p>
                        </div>
                    </Link>
                    <Link to={'/kontakt'} style={{textDecoration: 'none'}}>
                        <div style={{...style.anfrageProjektButton}}>
                            <p style={{...style.anfrageAnalyseButtonText, color: 'black'}}>
                                Neues Projekt anfragen
                            </p>
                            <MdOutlineNavigateNext size={'20px'}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}