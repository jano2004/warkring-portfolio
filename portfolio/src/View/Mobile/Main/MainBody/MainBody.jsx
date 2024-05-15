import MainBodyImage from './MainBodyImage.png';
import {Link} from "react-router-dom";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../Services/ThemeService/Colors";


const content = [
    {text: 'Responsive Design auf allen Geräten'},
    {text: 'Sichtbarkeit auf allen Suchmaschinen'},
    {text: 'Individuelle Gestaltung angepasst auf Sie'}
]

function ShowMainFeature({content, styles}) {
    return (
        <div style={styles.requestFeature}>
            <p style={styles.requestFeatureP}>{content}</p>
        </div>
    );
}


function MainBody({scrollToBottom}) {
    const [isDarkMode] = useDarkMode();

    const styles = {
        mainBodyMainSection: {
            width: '100%',
            height: 'auto'
        },
        mainBodyMainSectionP: {
            textAlign: 'left',
            fontSize: '27px',
            fontFamily: "'Lexend Zetta', sans-serif",
            fontWeight: 900,
            color: colors.mainTextColor(isDarkMode),
            textDecoration: 'inherit',
            lineHeight: 1,
            padding: '10px 0 0 17px',
            margin: 0
        },
        mainBodyMainDescriptionImage: {
            display: 'flex',
            flexDirection: 'row',
            height: '305px'
        },
        mainBodyMainDescriptionP: {
            fontFamily: "'Lexend Deca', sans-serif",
            fontWeight: 100,
            fontSize: '17px',
            textAlign: 'start',
            transform: 'rotate(90deg) translateY(90%) translateX(35%)',
            position: 'absolute',
            color: colors.mainTextColor(isDarkMode),
            lineHeight: 1.2
        },
        mainBodyMainDescriptionL: {
            color: colors.mainTextColor(isDarkMode),
            fontWeight: 400
        },
        mainBodyMainImage: {
            width: '75%',
            transform: 'translateY(-15%)'
        },
        mainBodyMainImageImg: {
            width: '120%',
            marginLeft: '100px'
        },
        mainBodyMainRequest: {
            backgroundColor: 'transparent',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '70px'
        },
        requestFeature: {
            backgroundColor: 'transparent',
            width: '100%',
            inlineSize: 'min(100% - 4rem, 70rem)',
            height: '30px',
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        requestFeatureImg: {
            height: '100%',
            marginRight: '10px'
        },
        requestFeatureP: {
            padding: 0,
            margin: 0,
            fontSize: '16px',
            lineHeight: 'normal',
            color: colors.mainTextColor(isDarkMode),
            fontWeight: 200,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
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
        <section style={styles.mainBodyMainSection}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;400&display=swap');
            </style>
            <p style={styles.mainBodyMainSectionP}> warkring.</p>
            <div style={styles.mainBodyMainDescriptionImage}>
                <div>
                    <p style={styles.mainBodyMainDescriptionP}>
                        professionelle
                        <br></br>
                        <l style={styles.mainBodyMainDescriptionL}>Webseiten</l> individuell
                        <br></br>für Ihr neues Unternehmen
                    </p>
                </div>
                <div style={styles.mainBodyMainImage} className={'main_body_main_image'}>
                    <img style={styles.mainBodyMainImageImg} src={MainBodyImage} alt={'mainImage'}/>
                </div>
            </div>
            <div  style={styles.mainBodyMainRequest}>
                {content.map((feature, index) => (
                    <ShowMainFeature key= {index} content= {feature.text} styles={styles}/>
                ))}
                <Link to={'/kontakt'}><button onClick={scrollToBottom} style={styles.mainBodyMainRequestButton}>Anfrage senden</button></Link>
            </div>
        </section>
    )
}

export default MainBody;