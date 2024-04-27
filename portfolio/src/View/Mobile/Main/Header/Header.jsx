import './Header.css';

function Header({ handleMenuMobileClick }) {
    return (
        <section className='main_header_section'>
            <div className='main_header_container'>
                <p>WARKRING WEBSITES</p>
                <div className='main_header_menu' onClick={handleMenuMobileClick}>
                    <div className='menu_line'></div>
                    <div className='menu_line'></div>
                    <div className='menu_line'></div>
                </div>
            </div>
        </section>
    );
}

export default Header;
