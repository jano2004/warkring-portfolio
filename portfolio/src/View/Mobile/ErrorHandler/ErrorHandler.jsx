import Header from "../Header/Header";
import Menu from "../Header/Menu/Menu";
import React, {useState} from "react";

export default function ErrorHandler({props}) {
    const [menu, setMenu] = useState(false);

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    }

    return (
        <div style={{width: '100%'}}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={props.toLowerCase()}/>}
            </div>
            <p style={{color: 'white'}}>Die {props}-Seite existiert noch nicht!</p>
        </div>
    )
}