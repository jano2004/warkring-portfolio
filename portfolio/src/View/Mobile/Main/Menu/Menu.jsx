import './MobileMenu.css';
import Header from '../Header/Header.jsx';
import NavContainer from "./NavContainer/NavContainer";

export default function Menu({ handleMenuMobileClick }) {
    return (
        <section className='main_menu_section'>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <NavContainer />
        </section>
    );
}
