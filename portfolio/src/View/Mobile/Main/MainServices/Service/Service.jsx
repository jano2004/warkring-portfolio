import {Link} from "react-router-dom";
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../Services/ThemeService/Colors";
export default function Service({ title, text, features }) {
    const removeWarningOfA = () => {
        return null;
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const [isDarkMode] = useDarkMode();

    const styles = {
        mainServiceContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            height: '400px',
            inlineSize: 'min(100% - 4rem, 70rem)',
            marginInline: 'auto',
            backgroundColor: colors.cardBackgroundColor(isDarkMode),
            color: colors.mainTextColor(isDarkMode),
            scrollSnapAlign: 'center',
            borderRadius: '20px',
            border: '1px solid' + colors.cardBorderColor(isDarkMode)
        },
        mainServiceHeaderText: {
            fontFamily: '-apple-system',
        },
        mainServiceHeader: {
            fontWeight: 400,
            fontSize: '1.8rem',
            marginLeft: '15px'
        },
        mainServiceText: {
            width: '80%',
            fontWeight: 300,
            fontSize: '16px',
            marginLeft: '15px'
        },
        mainServiceList: {
            listStyleType: 'circle',
            fontWeight: 200,
            fontSize: '15px',
            margin: 0
        },
        mainServiceCta: {
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 100,
            fontSize: '12px',
            transform: 'translateX(10%)',
            marginTop: 'auto',
        },
        mainServiceCtaText: {
            color: colors.mainTextColor(isDarkMode),
            fontWeight: '200'
        }
    };

    return (
        <div style={styles.mainServiceContainer}>
            <div style={styles.mainServiceHeaderText}>
                <h1 style={styles.mainServiceHeader}>{title}</h1>
                <p style={styles.mainServiceText}>{text}</p>
                <ul style={styles.mainServiceList} >
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div style={styles.mainServiceCta}>
                <p>
                    <Link to={'/services'} className={'custom_link'} onClick={scrollToTop}><a href={removeWarningOfA()} style={styles.mainServiceCtaText}>
                        Wenn Sie mehr zu diesem Service erfahren wollen, drücken Sie{' '}
                        <u>hier</u></a></Link>!
                </p>
            </div>
        </div>
    );
}