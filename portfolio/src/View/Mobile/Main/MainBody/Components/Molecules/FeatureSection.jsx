import React, { useState, useRef, useEffect } from 'react';
import { FeatureCard } from "../Atoms/FeatureCard";

function ShowScrollPage({ isActive, styles }) {
    return (
        <button style={isActive ? styles.scrollPageClicked : styles.scrollPage}></button>
    )
}

export function FeaturesSection({ cssVariables, isDarkMode, colors }) {
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

    const features = [
        {
            header: 'Responsive Design',
            text: 'Ihre Webseite sieht gut aus auf allen Endgeräten, dank unserem responsiven Design, welches sich der Gerätgröße anpasst.',
        },
        {
            header: 'Analyse-Tools',
            text: 'Bessere Einsicht in das Kundenverhalten um Ihr Marketing zu optimieren.',
        },
    ];

    const styles = {
        featuresSection: {
            width: '100%',
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '100%',
            gap: '1rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            color: colors.mainTextColor(isDarkMode),
            paddingBottom: cssVariables['--height_body_attached_space'],
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
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            height: '18px',
            width: '36px',
            borderRadius: '10px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginTop: '10px',
            paddingLeft: '5px',
            paddingRight: '5px',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
            marginBottom: '8px',
        },
        scrollPage: {
            backgroundColor: colors.mainTextColor(!isDarkMode),
            margin: '35%',
            borderRadius: '100%',
            border: 'none',
            padding: '0%',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        scrollPageClicked: {
            backgroundColor: '#529552',
            margin: '33%',
            borderRadius: '100%',
            border: 'none',
            padding: '0%',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        }
    }

    return (
        <>
        <section style={styles.featuresSection} ref={containerRef}>
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    cssVariables={cssVariables}
                    isDarkMode={isDarkMode}
                    colors={colors}
                    header={feature.header}
                    text={feature.text}
                />
            ))}
        </section>
        <div style={styles.mainServicePage}>
            <div style={styles.mainServicePageContainer}>
                {[0, 1].map(pageNumber => (
                    <ShowScrollPage
                    key={pageNumber}
                    isActive={currentPage === pageNumber}
                        styles={styles}
                    />
                ))}
            </div>
        </div>
        </>
    );
}