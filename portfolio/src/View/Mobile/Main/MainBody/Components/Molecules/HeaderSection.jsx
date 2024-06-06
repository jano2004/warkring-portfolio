import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function HeaderSection({ cssVariables, isDarkMode, colors }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []); 

    const firstHeightSpace = parseFloat(cssVariables['--height_section_space']) + parseFloat(cssVariables['--height_body_to_body_space']);
    const firstWidthSpace = parseFloat(cssVariables['--width_outside_card_space']) + parseFloat(cssVariables['--width_inside_card_space']);

    const styles = {
      headerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        marginLeft: firstWidthSpace,
        marginRight: firstWidthSpace,
        marginTop: cssVariables['--height_body_to_body_space'],
        marginBottom: firstHeightSpace,
        color: colors.mainTextColor(isDarkMode),
      },
      headerBrandContainer: {
        marginBottom: cssVariables['--height_section_space'],
        textAlign: 'center',
      },
      headerBrandHeader: {
        background: 'transparent',
        margin: '0',
        fontSize: cssVariables['--font_main_heading'],
        fontWeight: '500',
        marginBottom: cssVariables['--height_body_attached_space'],
      },
      headerBrandText: {
        background: 'transparent',
        fontSize: cssVariables['--font_body_text'],
        lineHeight: '1.1',
        fontWeight: '300',
      },
      textSpan: {
        color: colors.mainAccentColor,
        fontWeight: '600',
      },
      callContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        textAlign: 'center',
        transform: 'translateY(100%)',
        opacity: 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
      },
      callContainerFlyIn: {
        transform: 'translateY(0)',
        opacity: 1,
      },
      callText: {
        fontSize: cssVariables['--font_body_text'],
        fontWeight: '300',
        lineHeight: '1',
        marginBottom: cssVariables['--height_body_attached_space'],
      },
      callButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
      },
      callButton: {
        background: colors.mainAccentColor,
        fontSize: cssVariables['--font_body_text'],
        border: 'none',
        borderRadius: '5px',
        padding: '8px 16px',
        color: colors.mainTextColor(true),
        boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none',
        display: 'inline-block',
      },
    };

    return (
        <section style={styles.headerSection}>
          <div style={styles.headerBrandContainer}>
            <h1 style={styles.headerBrandHeader}>warkring.org</h1>
            <p style={styles.headerBrandText}>professionelle <span style={styles.textSpan}>Webseiten</span> für Ihren Online-Auftritt</p>
          </div>
          <div style={{ ...styles.callContainer, ...(isLoaded && styles.callContainerFlyIn) }}>
            <h2 style={styles.callText}>Kontaktieren Sie uns jetzt und lassen sich beraten!</h2>
            <div style={styles.callButtonContainer}>
                <Link to="/kontakt" style={styles.callButton}>Jetzt Starten</Link>
            </div>
          </div>
        </section>
    );
}