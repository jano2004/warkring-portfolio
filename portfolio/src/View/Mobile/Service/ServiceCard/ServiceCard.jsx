import {colors} from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import {Link} from "react-router-dom";

export default function ServiceCard({props}) {

    const [isDarkMode] = useDarkMode();

    const scrollToTop = () => {
        window.scrollTo({
            top: document.documentElement.offsetTop,
            behavior: 'smooth'
        });
    }

    const styles = {
        servicesServiceCardSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: 'auto',
            inlineSize: 'min(100% - 4rem, 70rem)',
            marginInline: '15px',
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            color: colors.mainTextColor(isDarkMode),
            marginTop: '30px',
            padding: '0 0 20px 0',
            borderRadius: '20px',
            border: '1px solid' + colors.cardBorderColor(isDarkMode)
        },
        servicesServiceHeader: {
            fontFamily: '-apple-system',
            fontWeight: 300,
            fontSize: '1.8rem',
            padding: '0',
            margin: '15px 0 0 15px',
        },
        servicesServiceText: {
            fontFamily: '-apple-system',
            marginLeft: '15px',
            width: '80%',
            fontWeight: 200,
            fontSize: '16px',
            padding: '0',
        },
        servicesServiceList: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            listStyleType: 'armenian',
            fontWeight: 100,
            fontSize: '15px',
            margin: '0',
            fontFamily: '-apple-system',
        },
        mainBodyMainRequestButton: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            marginTop: '10px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 300,
            color: colors.mainTextColor(!isDarkMode),
            backgroundColor: colors.buttonColor(isDarkMode),
            padding: '5px 20px'
        }
    };

    return (
        <section style={styles.servicesServiceCardSection}>
            <h1 style={styles.servicesServiceHeader}>{props.title}</h1>
            <p style={styles.servicesServiceText}>{props.text}</p>
            <ul style={styles.servicesServiceList}>
                {props.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}} >
                <Link to={'/kontakt'}><button onClick={scrollToTop} style={styles.mainBodyMainRequestButton}>Anfrage senden</button></Link>
            </div>
        </section>
    )
}