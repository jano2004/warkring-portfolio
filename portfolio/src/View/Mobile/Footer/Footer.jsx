import FooterImage from './FooterImage.png';
import {Link} from "react-router-dom";
import useDarkMode from "../../../Services/ThemeService/ThemeService";
import {colors} from "../../../Services/ThemeService/Colors";

function Footer() {
    const [isDarkMode] = useDarkMode();

    const styles = {
        style: {
            width: '100%',
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 20px 40px 20px',
            background: colors.cardBackgroundColor(isDarkMode)
        },
        styleContainer: {
            background: 'transparent',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'start',
            paddingLeft: '10px'
        },
        styleContainerHeader: {
            background: 'transparent',
            width: '100%',
            height: '30%',
            margin: '0'
        },
        styleHeaderText: {
            textAlign: 'left',
            fontSize: '25px',
            fontFamily: 'Lexend Zetta, sans-serif',
            fontWeight: '900',
            color: colors.mainTextColor(isDarkMode),
            textDecoration: 'inherit',
            lineHeight: '1'
        },
        footerLinkContainer: {
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'end',
        },
        styleImage: {
            background: 'transparent',
            margin: '0 0 0 22px',
            overflow: 'hidden'
        },
        footerLink: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontSize: '0.8rem',
            margin: '12px 12px 0 0',
            padding: '0',
            textDecoration: 'none'
        },
        styleLink: {
            textDecoration: 'none',
            marginRight: '20px',
            color: colors.mainTextColor(isDarkMode),
        }
    }

    const content = [ 'Kontakt', 'Über uns', 'Impressum' ];
    return (
        <footer style={styles.style}>
            <div style={styles.styleContainer}>
                <img style={styles.styleImage} src={FooterImage} alt={'footerImage'}/>
            </div>
            <div style={styles.footerLinkContainer}>
                {content.map((links, index)=>(
                    <FooterLink key={index} props={links} styles={styles}/>
                ))}
            </div>
        </footer>
    );
}

function FooterLink({props, styles}) {
    return (
        <Link to={'/' + props.toLowerCase()} style={styles.styleLink}><p style={styles.footerLink}>{props}</p></Link>
    )
}

export default Footer;