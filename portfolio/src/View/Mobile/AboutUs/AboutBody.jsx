import React, { useEffect, useState } from 'react';
import ShowPersonCard from './Components/AboutPersonCard';
import TextCards from './Components/AboutTextCards';
import { cssVariables } from "../../../Services/abstand";

export default function AboutBody() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []); 
    
    const content = {
        headerHeading: 'Über uns',
        headerFirstText: 'Willkommen bei Warkring, Ihrem professionellen Partner für maßgeschneiderte Website-Lösungen. Wir sind ein dynamisches Duo bestehend aus zwei engagierten Informatikstudenten an der FH Aachen.',
        headerSecText: 'Unsere Leidenschaft für die neueste Technologie und fortschrittliche Sicherheitssysteme treibt uns an, innovative und sichere Websites genau nach Kundenwunsch zu erstellen.',
        endFirstText: 'Vertrauen Sie auf Warkring, wenn es darum geht, Ihre digitale Präsenz zu gestalten.',
        endSecondText: 'Lassen Sie uns gemeinsam etwas Großartiges schaffen!'
    };

    const personCard = {
        first: {
            personName: 'Jan',
            personText: 'Ich bin 20 Jahre alt. Bei Warkring bin ich sowohl als Frontend- als auch Backend-Entwickler tätig.'
        },
        second: {
            personName: 'Nick',
            personText: 'Ich bin 22 Jahre alt und spezialisiere mich bei Warkring auf Design und Frontend-Entwicklung.'
        },
    };


    const styles = {
        about_main_section: {
            backgroundColor: 'transparent',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        about_main_content: {
            backgroundColor: 'transparent',
            width: '100%',
            marginLeft: cssVariables['--width_outside_card_space'],
            marginRight: cssVariables['--width_outside_card_space'],
        },
        about_main_header: {
            width: '100%',
            marginBottom: cssVariables['--height_header_space'],
        },
        about_main_header_heading: {
            backgroundColor: 'transparent',
            width: '100%',
            margin: '0%',
            marginBottom: cssVariables['--height_header_space'],
            fontSize: cssVariables['--font_main_heading'],
            fontWeight: 'normal',
        },
        about_main_header_text_container: {
            transform: 'translateY(100%)',
            opacity: 0,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        },
        flyIn: {
            transform: 'translateY(0)',
            opacity: 1,
          },
        about_main_header_first: {
            backgroundColor: 'transparent',
            width: '100%',
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 'normal',
            margin: '0%',
            marginBottom: cssVariables['--height_body_to_body_space'],
        },
        about_main_header_second: {
            backgroundColor: 'transparent',
            width: '100%',
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 'normal',
            margin: '0%',
        },
        about_main_person_cards: {
            backgroundColor: 'transparent',
            marginBottom: cssVariables['--height_section_space'],
        },
        about_main_text_cards: {
            backgroundColor: 'transparent',
            width: '100%',
            marginBottom: cssVariables['--height_section_space'],
        },
        about_main_end: {
            backgroundColor: 'transparent',
            marginLeft: cssVariables['--width_inside_card_space'],
            marginRight: cssVariables['--width_inside_card_space'],
            marginBottom: cssVariables['--height_section_space'],
        },
        about_main_end_text: {
            backgroundColor: 'transparent',
            margin: '0%',
            fontSize: cssVariables['--font_body_heading'],
            fontWeight: '500',
        },
        about_main_end_text_not_last_child: {
            marginBottom: cssVariables['--height_header_space'],
        }
    };

    return (
        <section style={styles.about_main_section}>
            <div style={styles.about_main_content}>
                <section style={styles.about_main_header}>
                    <h1 style={styles.about_main_header_heading}>{content.headerHeading}</h1>
                    <div style={{ ...styles.about_main_header_text_container, ...(isLoaded && styles.flyIn)} }>
                        <p style={styles.about_main_header_first}>{content.headerFirstText}</p>
                        <p style={styles.about_main_header_second}>{content.headerSecText}</p>
                    </div>
                </section>
                <section style={styles.about_main_person_cards}>
                    <ShowPersonCard person={personCard.first} cssVariables={cssVariables} isLoaded={isLoaded} />
                    <ShowPersonCard person={personCard.second} isMirrored cssVariables={cssVariables} isLoaded={isLoaded} />
                </section>
                <section style={styles.about_main_text_cards}>
                    <TextCards cssVariables={cssVariables} />
                </section>
                <section style={styles.about_main_end}>
                    <p style={{ ...styles.about_main_end_text, ...styles.about_main_end_text_not_last_child }}>{content.endFirstText}</p>
                    <p style={styles.about_main_end_text}>{content.endSecondText}</p>
                </section>
            </div>
        </section>
    );
}
