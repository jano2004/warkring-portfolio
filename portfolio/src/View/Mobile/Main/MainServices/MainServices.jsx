import React, { useState, useRef, useEffect } from 'react';
import { services } from './Service/ServiceData';
import Service from './Service/Service';
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../Services/ThemeService/Colors";


function ShowScrollPage({ isActive, styles }) {
    return (
        <button style={isActive ? styles.scrollPageClicked : styles.scrollPage}></button>
    )
}

export default function MainServices() {
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef(null);
    const [isDarkMode] = useDarkMode();

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
                        setCurrentPage(i + 1);
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

    const styles = {
        mainServiceSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
            width: '100%',
        },
        mainServiceTop: {
            textAlign: 'left',
            textDecoration: 'inherit',
            fontSize: '27px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontWeight: 800,
            color: '#F8F8F8',
            inlineSize: 'min(100% - 4rem, 70rem)',
            lineHeight: 1,
            padding: '0 0 18px 0',
            margin: 0,
            width: '100%'
        },
        mainServicesContainer: {
            width: '100%',
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '100%',
            gap: '1rem',
            overflowX: 'auto',
            marginTop: 0,
            scrollSnapType: 'x mandatory'
        },
        mainServicePage: {
            backgroundColor: 'transparent',
            width: '100%',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        mainServicePageContainer: {
            backgroundColor: colors.mainBackgroundColor(isDarkMode),
            height: '18px',
            width: '55px',
            borderRadius: '10px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '10px',
            paddingLeft: '5px',
            paddingRight: '5px'
        },
        scrollPage: {
            backgroundColor: colors.cardBorderColor(!isDarkMode),
            margin: '35%',
            borderRadius: '100%',
            border: 'none',
            padding: '0%'
        },
        scrollPageClicked: {
            backgroundColor: colors.cardBorderColor(isDarkMode),
            margin: '33%',
            borderRadius: '100%',
            border: 'none',
            padding: '0%'
        }
    };

    return (
        <div style={styles.mainServiceSection}>
            <div style={styles.mainServicesContainer} ref={containerRef}>
                {services.map((service, index) => (
                    <Service key={index} {...service}/>
                ))}
            </div>
            <div style={styles.mainServicePage}>
                <div style={styles.mainServicePageContainer}>
                    <ShowScrollPage 
                        isActive={currentPage === 1} styles={styles}
                    />
                    <ShowScrollPage 
                        isActive={currentPage === 2} styles={styles}
                    />
                    <ShowScrollPage 
                        isActive={currentPage === 3} styles={styles}
                    />
                </div>
            </div>
        </div>
    );
}