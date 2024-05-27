import {Link} from "react-router-dom";
import useDarkMode from "../../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../../Services/ThemeService/Colors";

import { IoMdContact } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { LuAtom } from "react-icons/lu";
import { SiMoleculer } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { FaHandsHelping } from "react-icons/fa";

export default function NavItems({icon, text, selected, setSelected, setStatus }) {
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
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            margin: '0 0 0 20px',
        },
        mainMenuImageContainerImg: {
            width: '25px',
            margin: '20px 0 0 0'
        },
        mainMenuNavP: {
            fontSize: '20px',
            fontFamily: '-apple-system',
            margin: '10px 0 0 15px',
            paddingBottom: '10px',
            color: selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode),
            fontWeight: selected === convertedText ? '300' : '200'
        }
    };

    return (
        <div style={styles.mainMenuNav}>
            <div style={{...styles.mainMenuNavContainer}} onClick={handleClick}>
                {icon === 'homeIcon' ? <IoIosHome size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/> : null}
                {icon === 'featuresIcon' ? <LuAtom size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/> : null}
                {icon === 'servicesIcon' ? <SiMoleculer size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/> : null}
                {icon === 'aboutIcon' ? <div style={{transform: 'rotate(180deg)'}}><DiMaterializecss size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/></div> : null}
                {icon === 'contactIcon' ? <IoMdContact size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/> : null}
                {icon === 'helpIcon' ? <FaHandsHelping size={'25px'} color={selected === convertedText ? colors.navItemSelectedColor(isDarkMode) : colors.navItemUnselectedColor(isDarkMode)}/> : null}
                <Link to={convertedText === 'home' ? '/' : '/' + convertedText } className={'custom_link'}><p style={styles.mainMenuNavP}  onClick={handleClick}>{text}</p></Link>
            </div>
        </div>
    )
}