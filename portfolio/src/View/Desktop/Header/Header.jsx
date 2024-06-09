import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={style.main}>
            {/* Background with blur effect */}
            <div style={style.backgroundBlur}></div>

            {/* Content without blur */}
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div style={style.logoContainer}>
                    <p style={style.logo}>
                        warkring.org
                    </p>
                </div>
            </Link>

            <div style={style.navContainer}>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <NavItem props={'Projekte'}/>
                </Link>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <NavItem props={'Über uns'}/>
                </Link>
                <Link to={'/kontakt'} style={{ textDecoration: 'none' }}>
                    <NavItemWithBackground props={'Projekt anfragen'}/>
                </Link>
            </div>
        </div>
    );
}

function NavItem({props}) {
    return (
        <div style={navItemStyle.container}>
            <p style={navItemStyle.paragraph}>
                {props}
            </p>
        </div>
    );
}

function NavItemWithBackground({props}) {
    return (
        <div style={navItemStyle.containerWithBackground}>
            <p style={navItemStyle.paragraphWithBackground}>
                {props}
            </p>
        </div>
    );
}

const navItemStyle = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
        borderRadius: '7px'
    },
    paragraph: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '18px',
        fontWeight: '250',
        color: 'black',
        userSelect: 'none',
        cursor: 'pointer'
    },
    containerWithBackground: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(21,33,212,0.7)',
        height: '35px',
        borderRadius: '7px'
    },
    paragraphWithBackground: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '18px',
        fontWeight: '250',
        color: 'white',
        padding: '5px 15px',
        userSelect: 'none',
        cursor: 'pointer'
    }
};

const style = {
    main: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        width: '100%',
    },
    backgroundBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        filter: '',
        zIndex: -1,
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        margin: '0 0 0 40px',
    },
    logo: {
        fontSize: '30px',
        fontWeight: '400',
        userSelect: 'none',
        cursor: 'pointer',
        color: 'black'
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        margin: '0 40px 0 0',
        padding: '12px 25px 12px 25px',
        background: 'white',
        borderRadius: '8px'
    }
}

