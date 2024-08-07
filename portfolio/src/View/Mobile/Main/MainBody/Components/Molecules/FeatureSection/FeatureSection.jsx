import React from 'react';
import FeatureCard from '../../Atoms/FeatureCard/FeatureCard';
import Area from '../../Atoms/Area/Area';

export function FeaturesSection({ cssVariables, colors, activate }) {
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
        scrollSnapAlign: 'start',
        height: '100vh',
    };

    return (
        <Area style={sectionStyle}>
            <FeatureCard
                cssVariables={cssVariables}
                colors={colors}
                header={content[0].header}
                text={content[0].text}
                activate= {activate}
            />
            <FeatureCard
                cssVariables={cssVariables}
                colors={colors}
                header={content[1].header}
                text={content[1].text}
                activate={activate}
                isMirrored
            />
            <FeatureCard
                cssVariables={cssVariables}
                colors={colors}
                header={content[2].header}
                text={content[2].text}
                activate={activate}
            />
        </Area>
    );
}