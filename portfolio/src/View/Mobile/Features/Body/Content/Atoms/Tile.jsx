import useDarkMode from "../../../../../../Services/ThemeService/ThemeService";
import { colors } from "../../../../../../Services/ThemeService/Colors";

export function ShowTile ({ cssVariables, feature }) {
    const [isDarkMode] = useDarkMode();

    const styles = {
        cardContainer: {
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            flex: '1 1 calc(25% - 17px',
            borderRadius: '13px',
            display: 'flex',
            flexDirection: 'column',
            aspectRatio: '1 / 1',
            minWidth: '140px', 
        },
        cardContent: {
            marginTop: cssVariables['--height_body_attached_space'],
            marginBottom: cssVariables['--height_body_attached_space'],
            marginLeft: cssVariables['--width_inside_card_space'],
            marginRight: cssVariables['--width_inside_card_space'],
            flex: '1 1 auto',
        },
        cardContentH2: {
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 'bold',
            margin: '0%',
            marginBottom: cssVariables['--height_body_attached_space'],
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            wordBreak: 'break-all',

            lineHeight: '1.1',
        },
        cardContentP: {
            fontSize: cssVariables['--font_body_text'],
            margin: '0%',
            lineHeight: '1.1',
        },
    };
    return (
        <div style={styles.cardContainer}>
            <div style={styles.cardContent}>
                <h2 style={styles.cardContentH2}>{ feature.featureName }</h2>
                <p style={styles.cardContentP}>Hier folgt die Beschreibung</p>
            </div>
        </div>
    )
}