import MainBodyImage from '../../Main/Images/CatalogIcon.png';
import logo from '../../../Desktop/Images/transparentLogo.png'

function SpeacialHeader({handleHomeClick}) {

    const fixedHeader = {
        position: 'fixed',
    }

    return (
        <section className='main_header_section' style={fixedHeader}>
            <div className='main_content_container'>
                <div className='main_content_container_left'>
                    <div className='main_content_logo'>
                        <button onClick={handleHomeClick}><img src={logo} alt=''/></button>
                    </div>
                    <div className='main_content_catalog'>
                        <img src={MainBodyImage} alt=''/>
                        <p>Katalog</p>
                    </div>
                </div>
                <div className='main_content_container_right'>
                </div>
            </div>
            <div className='small_links_content_container'>
                <p className='small_links_affiliate'>Unser Affiliate-System</p>
                <p className='small_links_contact'>Kontaktiere uns jetzt!</p>
            </div>
        </section>
    )
}

export default SpeacialHeader;