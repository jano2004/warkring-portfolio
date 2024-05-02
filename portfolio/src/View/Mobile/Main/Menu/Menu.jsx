import './MobileMenu.css';
import Header from '../Header/Header.jsx';
import NavContainer from "./NavContainer/NavContainer";
import Footer from "./NavContainer/Footer/Footer";
import { content, footerContent } from "./NavContainer/NavItems/NavItemsContent";
import {useState} from "react";

export default function Menu({ handleMenuMobileClick }) {
    const [selected, setSelected] = useState('home');

    return (
        <section className='main_menu_section'>
            <div className={'main_menu_section_header'}>
                <Header handleMenuMobileClick={handleMenuMobileClick}/>
                <NavContainer content={content} selected={selected} setSelected={setSelected}/>
            </div>
            <div className={'main_menu_section_footer'}>
                <NavContainer content={footerContent} selected={selected} setSelected={setSelected}/>
                <Footer />
            </div>
        </section>
    );
}
