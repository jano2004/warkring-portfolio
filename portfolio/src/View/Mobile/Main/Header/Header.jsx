import './Header.css';
import MainBodyImage from '../Images/CatalogIcon.png';

function Header({handleHomeClick}) {
    return (
        <section className='main_header_section'>
            <div className='main_content_container'>
                <div className='main_content_container_left'>
                    <div className='main_content_logo'>
                        <button onClick={handleHomeClick}><p>W</p></button>
                    </div>
                    <div className='main_content_catalog'>
                        <img src={MainBodyImage}  alt=''/>
                        <p>Katalog</p>
                    </div>
                </div>
                <div className='main_content_container_right'>
                    <button className='main_content_login'>Login</button>

                </div>
            </div>
            <div className='small_links_content_container'>
                <p className='small_links_affiliate'>Unser Affiliate-System</p>
                <p className='small_links_contact'>Kontaktiere uns jetzt!</p>
            </div>
        </section>
    )
}

export default Header;