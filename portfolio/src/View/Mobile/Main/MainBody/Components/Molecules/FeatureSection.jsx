import React, { useState, useEffect } from 'react';
import { FeatureCard } from "../Atoms/FeatureCard/FeatureCard";

export function FeaturesSection({ cssVariables, isDarkMode, colors }) {
    const [activateFirst, setActivateFirst] = useState(false);
    const [activateSecond, setActivateSecond] = useState(false);
    const [activateThird, setActivateThird] = useState(false)


    const handleScroll = () => {
        if(window.scrollY >= window.innerHeight - (window.innerHeight - 150)) { setActivateFirst(true); }
        if(window.scrollY >= window.innerHeight - (window.innerHeight - 350)) { setActivateSecond(true); }
        if(window.scrollY >= window.innerHeight - (window.innerHeight - 550)) { setActivateThird(true); }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const content = [
        {
            header: 'Gewünschtes Webdesign',
            text: 'Modernes, ansprechendes Design, welches Ihre Markenidentität widerspiegelt und Ihre Zielgruppe anspricht.',
        },
        {
            header: 'Professionelle Webentwicklung',
            text: 'Robuste und skalierbare Lösungen, die auf den neuesten Technologien basieren und optimale Leistung garantieren.',
        },
        {
            header: 'SEO und Digitales Marketing',
            text: 'Strategien, die Ihre Sichtbarkeit verbessern und den Traffic auf Ihrer Webseite erhöhen.',
        }
    ];

    const sectionStyle = {
        background: 'transparent',
        marginLeft: cssVariables['--width_outside_card_space'],
        marginRight: cssVariables['--width_outside_card_space'],
    };

    return (
        <section style={sectionStyle}>
            <FeatureCard
                cssVariables={cssVariables}
                isDarkMode={isDarkMode}
                colors={colors}
                header={content[0].header}
                text={content[0].text}
                activate={activateFirst}
            />
            <FeatureCard
                cssVariables={cssVariables}
                isDarkMode={isDarkMode}
                colors={colors}
                header={content[1].header}
                text={content[1].text}
                activate={activateSecond}
                isMirrored
            />
            <FeatureCard
                cssVariables={cssVariables}
                isDarkMode={isDarkMode}
                colors={colors}
                header={content[2].header}
                text={content[2].text}
                activate={activateThird}
            />
        </section>
    );
}