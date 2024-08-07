import './MainMobile.css';
import { MainBody } from '../MainBody/MainBody';
import Footer from '../../Footer/Footer';
import { colors } from "../../../../Services/ThemeService/Colors";

function MobileMain() {

    const styles = {
        mobileBody: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.mainBackgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'hidden',
        }
    };

    return (
        <div style={styles.mobileBody}>
            <MainBody/>
            <Footer/>
        </div>
    );
}

export default MobileMain;
