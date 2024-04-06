import './Footer.css';
import facebookIcon from '../Images/facebookIcon.png';
import xIcon from '../Images/xIcon.png';
import xingIcon from '../Images/xingIcon.png';
import linkedInIcon from '../Images/linkedInIcon.png';

function Footer() {
    return (
        <section className='main_footer_section'>
            <div className='main_footer_top'>
                <input type='text' placeholder='E-Mail'/>
                <button>Anmelden</button>
            </div>
            <div className='main_footer_bottom'>
                <div className='main_footer_bottom_top'>
                    <button><img src={facebookIcon}/></button>
                    <button><img src={xIcon}/></button>
                    <button><img src={xingIcon}/></button>
                    <button><img src={linkedInIcon}/></button>
                </div>
                <div className='main_footer_bottom_bottom'>
                    <a><u>Impresssum</u></a>
                    <a><u>Datenschutz</u></a>
                    <a><u>Kontakt</u></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;