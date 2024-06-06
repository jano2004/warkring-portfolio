import { useNavigate } from "react-router-dom";
import useDarkMode from "../../../Services/ThemeService/ThemeService";
import {colors} from "../../../Services/ThemeService/Colors";
import { cssVariables } from '../../../Services/abstand';

function Footer() {
    const [isDarkMode] = useDarkMode();

    const styles = {
        style: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: colors.cardBackgroundColor(isDarkMode)
        },
        footerLinkContainer: {
            backgroundColor: 'transparent',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: cssVariables['--height_body_attached_space'],
            marginBottom: cssVariables['--height_body_attached_space'],
            marginRight: cssVariables['--width_outside_card_space'],
            marginLeft: cssVariables['--width_outside_card_space'],
        },
        footerLink: {
            fontSize: cssVariables['--font_body_text'],
            padding: '0',
            textDecoration: 'none',
            margin: '0%',
        },
        styleLink: {
            textDecoration: 'none',
            color: colors.mainTextColor(isDarkMode),
        }
    }

    const content = [ 'Kontakt', 'Über uns', 'Impressum' ];
    return (
        <footer style={styles.style}>
            <div style={styles.footerLinkContainer}>
                {content.map((links, index)=>(
                    <FooterLink key={index} props={links} styles={styles}/>
                ))}
            </div>
        </footer>
    );
}

function FooterLink({props, styles}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/' + props.toLowerCase());
        window.scrollTo(0, 0);
    };

    return (
        <a href={'/' + props.toLowerCase()} onClick={handleClick} style={styles.styleLink}>
            <p style={styles.footerLink}>{props}</p>
        </a>
    )
}

export default Footer;