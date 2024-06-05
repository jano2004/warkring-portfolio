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
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
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
        <div style={styles.cardContainer}>
            <div style={styles.cardContent}>
                <h2 style={styles.cardContentH2}>{ feature.featureName }</h2>
                <div style={styles.cardContentIcon}>{ feature.featureIcon }</div>
            </div>
        </div>
    )
}