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
                    <button><img alt='' src={facebookIcon}/></button>
                    <button><img alt='' src={xIcon}/></button>
                    <button><img alt='' src={xingIcon}/></button>
                    <button><img alt='' src={linkedInIcon}/></button>
                </div>
                <div className='main_footer_bottom_bottom'>
                    <a href='.'><u>Impresssum</u></a>
                    <a href='.'><u>Datenschutz</u></a>
                    <a href='.'><u>Kontakt</u></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;