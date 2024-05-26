import useDarkMode from "../../../Services/ThemeService/ThemeService";
import {colors} from "../../../Services/ThemeService/Colors";

function Header({ handleMenuMobileClick}) {
    const [isDarkMode] = useDarkMode()

    const styles = {
        mainHeaderSection: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '50px',
        },
        mainHeaderContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            width: '90%',
            height: '100%'
        },
        mainHeaderMenu: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '1rem',
            width: '30px',
            transition: 'all 0.2s ease-in-out'
        },
        menuLine: {
            width: '100%',
            height: '1px',
            backgroundColor: colors.mainTextColor(isDarkMode),
            transition: 'all 0.2s ease-in-out'
        }
    };

    return (
        <section style={styles.mainHeaderSection}>
            <div style={styles.mainHeaderContainer}>
                <div style={styles.mainHeaderMenu} onClick={handleMenuMobileClick}>
                    <div style={styles.menuLine}></div>
                    <div style={styles.menuLine}></div>
                    <div style={styles.menuLine}></div>
                </div>
            </div>
        </section>
    );
}

export default Header;
