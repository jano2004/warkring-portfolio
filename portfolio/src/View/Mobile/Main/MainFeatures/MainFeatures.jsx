import {colors} from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";

function ShowFeatures({heading, description, styles}) {
    return (
        <div style={styles.serviceFeaturesContainer}>
            <h1 style={styles.mainFeaturesHeader}>{heading}</h1>
            <p style={styles.mainFeaturesDescription}>{description}</p>
        </div>
    );
}

const content = [
    {
        heading: 'Login / Registrierung',
        description: 'Die perfekte Platform für Ihre Kunden.'
    },
    {
        heading: 'Analyse-Tools',
        description: 'Bessere Einsicht in das Kundenverhalten, für optimiertes Marketing.'
    },
    {
        heading: 'Personalisierung',
        description: 'Wir erstellen Ihre Webseite genau nach Ihren Vorstellungen.'
    },
]

export default function MainFeatures() {
    const [isDarkMode] = useDarkMode();

    const styles = {
        mainFeaturesSection: {
            fontFamily: "'Inter', sans-serif",
            height: '500px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
        },
        mainFeaturesContainer: {
            fontFamily: "'Inter', sans-serif",
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            color: colors.mainTextColor(isDarkMode),
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            inlineSize: 'min(100% - 4rem, 70rem)',
            padding: '10px 0 20px 0',
            borderRadius: '20px',
            border: '1px solid' + colors.cardBorderColor(isDarkMode)
        },
        serviceFeaturesContainer: {
            fontFamily: "'Inter', sans-serif",
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            color: colors.mainTextColor(isDarkMode),
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            inlineSize: 'min(100% - 4rem, 70rem)',
            padding: '10px 0 20px 0',
            borderRadius: '20px',
        },
        mainFeaturesHeader: {
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '300',
            fontSize: '1.3rem'
        },
        mainFeaturesDescription: {
            textAlign: 'center',
            margin: '0',
            fontWeight: '100',
            fontSize: '15px'
        },
        mainFeaturesImage: {
            backgroundColor: 'transparent',
            inlineSize: 'min(100% - 4rem, 70rem)',
            height: '300px',
            marginTop: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        mainFeaturesImageImg: {
            width: '100%'
        },
        header: {
            textAlign: 'left',
            textDecoration: 'inherit',
            fontSize: '27px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontWeight: 800,
            color: '#F8F8F8',
            inlineSize: 'min(100% - 4rem, 70rem)',
            lineHeight: 1,
            padding: '0 0 18px 0',
            margin: 0,
            width: '100%'
        }
    };

    return (
        <section style={styles.mainFeaturesSection}>
            <div style={styles.mainFeaturesContainer}>
                {content.map((feature, index) => (
                    <ShowFeatures key={index} heading={feature.heading} description={feature.description} styles={styles}/>
                ))}
            </div>
        </section>
    );
}