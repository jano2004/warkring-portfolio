import React from "react";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import { colors } from "../../../../Services/ThemeService/Colors";

function ShowTextCard({ cssVariables, content }) {
    const [isDarkMode] = useDarkMode();
    const styles = {
        cardContainer: {
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            border: '1px solid' + colors.cardBorderColor(isDarkMode),
            width: '100%',
            height: '340px',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: cssVariables['--height_body_attached_space'],
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        card: {
            backgroundColor: 'transparent',
            marginLeft: cssVariables['--width_inside_card_space'],
            marginRight: cssVariables['--width_inside_card_space'],
            marginTop: cssVariables['--height_body_to_body_space'],
            marginBottom: cssVariables['--height_body_to_body_space'],
        },
        cardHeader: {
            fontSize: cssVariables['--font_body_heading'],
            margin: 0,
            marginBottom: cssVariables['--height_body_to_body_space'],
            fontWeight: 'bold',
        },
        cardText: {
            fontSize: cssVariables['--font_body_text'],
            margin: 0,
            fontWeight: '400',
        },
    }
    return (
        <div style={styles.cardContainer}>
            <div style={styles.card}>
                <h2 style={styles.cardHeader}>{content.header}</h2>
                <p style={styles.cardText}>{content.text}</p>
            </div>
        </div>
    );
}

export default function TextCards({ cssVariables }) {
    const content= {
        header: 'Unser Anspruch',
        text: 'Bei Warkring verstehen wir, dass jede Website einzigartig ist. Deshalb arbeiten wir eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Vision Wirklichkeit wird. Egal, ob Sie einen Online-Shop, eine persönliche Blogseite oder eine Unternehmenswebseite benötigen – wir setzen Ihre Ideen mit höchster Präzision um.',

    }
    return (
        <>
            <ShowTextCard cssVariables= { cssVariables } content= { content }/>
        </>
    );
}