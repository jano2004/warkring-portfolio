import { useState, useRef } from "react";

import { ShowTile } from "../Atoms/Tile";

export function ShowSection({ cssVariables, pack }) {

    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef(null);

    const toggleShowAll = () => {
        setShowAll(!showAll);

        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const styles = {
        sectionContainer: {
            backgroundColor: 'transparent',
            width: '100%',
            marginBottom: cssVariables['--height_section_space']
        },
        sectionHeader: {
            backgroundColor: 'transparent',
            margin: '0%',
            marginBottom: cssVariables['--height_body_attached_space'],
        },
        sectionHeaderH2: {
            fontSize: cssVariables['--font_body_heading'],
            margin: '0%',
            fontWeight: '600',
        },
        sectionTiles: {
            backgroundColor: 'transparent',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: cssVariables['--height_body_attached_space'],
            marginBottom: cssVariables['--height_body_attached_space']
        },
        sectionButtonContainer: {
            backgroundColor: 'transparent',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        sectionButton: {
            fontSize: cssVariables['--font_body_text'],
            backgroundColor: 'transparent',
            border: 'none',
            color: '#529552',
        },
        emptyCardContainer: {
            flex: '1 1 calc(25% - 17px)', 
            marginBottom: cssVariables['--height_body_attached_space'],
            visibility: 'hidden', 
        },
    };

    const displayFeatures = showAll ? pack.serviceFeatures : pack.serviceFeatures.slice(0, 4);
    const isOdd = displayFeatures.length % 2 !== 0;
    return (
        <section style={styles.sectionContainer} ref={sectionRef}>
            <div style={styles.sectionHeader}>
                <h2 style={styles.sectionHeaderH2}>{ pack.serviceName }</h2>
            </div>
            <div style={styles.sectionTiles}>
                {pack.serviceFeatures.slice(0, showAll ? pack.serviceFeatures.length : 4).map((feature, index) => (
                    <ShowTile key={index} cssVariables={cssVariables} feature={feature} />
                ))}
                {isOdd && (
                    <div style={styles.emptyCardContainer}></div>
                )}
            </div>
            {pack.serviceFeatures.length > 4 && (
                <div style={styles.sectionButtonContainer}>
                    <button style={styles.sectionButton} onClick={toggleShowAll}>
                        {showAll ? 'Weniger anzeigen' : 'Alle anzeigen'}
                    </button>
                </div>
            )}
        </section>
    )
}