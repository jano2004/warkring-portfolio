import React, { useState } from 'react';
import useDarkMode from "../../../../../../Services/ThemeService/ThemeService";
import { colors } from "../../../../../../Services/ThemeService/Colors";

export function ShowTile({ cssVariables, feature }) {
    const [isDarkMode] = useDarkMode();
    const [flip, setFlip] = useState(false);

    const handleFlip = (event) => {
        event.stopPropagation();
        setFlip(!flip);
    };

    const styles = {
        cardContainer: {
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            flex: '1 1 calc(25% - 17px)',
            borderRadius: '13px',
            display: 'flex',
            flexDirection: 'column',
            aspectRatio: '1 / 1',
            minWidth: '140px',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.5s ease-in-out',
        },
        cardFlipInner: {
            position: 'relative',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'transform 0.5s',
            transformStyle: 'preserve-3d',
            transform: flip ? 'rotateY(180deg)' : 'rotateY(0deg)',
        },
        cardFront: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '13px',
            overflow: 'hidden',
        },
        cardBack: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '13px',
            overflow: 'hidden',
        },
    };

    return (
        <div style={styles.cardContainer} onClick={handleFlip}>
            <div style={styles.cardFlipInner}>
                <div style={styles.cardFront}>
                    <UnflippedTile cssVariables={cssVariables} feature={feature} />
                </div>
                <div style={styles.cardBack}>
                    <FlippedTile cssVariables={cssVariables} feature={feature} />
                </div>
            </div>
        </div>
    );
}

function UnflippedTile({ cssVariables, feature }) {
    const styles = {
        cardContent: {
            marginTop: cssVariables['--height_body_attached_space'],
            marginBottom: cssVariables['--height_body_attached_space'],
            marginLeft: cssVariables['--width_inside_card_space'],
            marginRight: cssVariables['--width_inside_card_space'],
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContentH2: {
            backgroundColor: 'transparent',
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 'normal',
            margin: '0%',
            marginBottom: cssVariables['--height_body_attached_space'],
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            lineHeight: '1.1',
            height: '50%',
            textAlign: 'center'
        },
        cardContentIcon: {
            backgroundColor: 'transparent',
            margin: '0%',
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };
    return (
        <div style={styles.cardContent}>
            <h2 style={styles.cardContentH2}>{feature.featureName}</h2>
            <div style={styles.cardContentIcon}>{feature.featureIcon}</div>
        </div>
    );
}

function FlippedTile({ cssVariables, feature }) {
    const styles = {
        cardContent: {
            marginTop: cssVariables['--height_body_attached_space'],
            marginBottom: cssVariables['--height_body_attached_space'],
            marginLeft: cssVariables['--width_inside_card_space'],
            marginRight: cssVariables['--width_inside_card_space'],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
        cardContentText: {
            backgroundColor: 'transparent',
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 'normal',
            margin: '0%',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            lineHeight: '1.1',
            width: '100%',
            height: '100%',
            textAlign: 'center',
        },
    };
    return (
        <div style={styles.cardContent}>
            <p style={styles.cardContentText}>{feature.featureText}</p>
        </div>
    );
}