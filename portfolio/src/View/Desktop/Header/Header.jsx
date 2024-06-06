import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '50px',
            height: '70px',
            width: '100%',
            background: 'white'}}>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '30px', margin: '0 0 0 40px'}}>
                    <p style={{
                        fontSize: '30px',
                        fontWeight: '400',
                        userSelect: 'none',
                        cursor: 'pointer',
                        color: 'black'}}>
                        warkring.org
                    </p>
                </div>
            </Link>

            <div style={{display: 'flex', flexDirection: 'row', gap: '30px', margin: '0 40px 0 0'}}>
                <NavItem props={'Projekte'}/>
                <NavItem props={'Über uns'}/>
                <NavItem props={'Projekt anfragen'} color={'white'} background={'#007AFF'}
                         padding={'5px 15px 5px 15px'}/>
            </div>
        </div>
    )
}

function NavItem({props, color, background, padding}) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: background,
            height: '35px',
            borderRadius: '7px'}}>
            <p style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                fontSize: '18px',
                fontWeight: '250',
                color: color,
                padding: padding,
                userSelect: 'none',
                cursor: 'pointer'
            }}>
                {props}
            </p>
        </div>
    )
}