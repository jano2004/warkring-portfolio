import { Link } from "react-router-dom";
import { navItemStyle, style } from "./style";

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