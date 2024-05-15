import {Link} from "react-router-dom";
import useDarkMode from "../../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../../Services/ThemeService/Colors";
export default function NavItems({iconSelected, iconUnselected, text, selected, setSelected, setStatus }) {
    let convertedText = text.toString().toLowerCase();
    const handleClick = () => {
        setSelected(convertedText);
        setStatus = convertedText;
    };

    const [isDarkMode] = useDarkMode();

    const styles = {
        mainMenuNav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        mainMenuNavContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
        },
        mainMenuImageContainerImg: {
            width: '25px',
            margin: '20px 0 0 0'
        },
        mainMenuNavP: {
            fontSize: '20px',
            fontFamily: '-apple-system',
            margin: '10px 0 0 20px',
            paddingBottom: '10px',
            color: selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode),
            fontWeight: selected === convertedText ? '300' : '200'
        }
    };

    return (
        <div style={styles.mainMenuNav}>
            <div style={styles.mainMenuNavContainer} onClick={handleClick}>
            </div>
            <Link to={convertedText === 'home' ? '/' : '/' + convertedText } className={'custom_link'}><p style={styles.mainMenuNavP}  onClick={handleClick}>{text}</p></Link>
        </div>
    )
}