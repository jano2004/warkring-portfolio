import './Footer.css';
import FooterImage from './FooterImage.png';
import {Link} from "react-router-dom";

function Footer() {
    const content = [ 'Kontakt', 'Über uns', 'Impressum' ];
    return (
        <footer className='main_footer_section'>
            <div className='main_footer_logo_container'>
                <img src={FooterImage} alt={'footerImage'} className='footer_image'/>
                <div className='main_footer_logo_container_header'>
                    <h1>warkring</h1>
                </div>
            </div>
            <div className='footer_link_container'>
                {content.map((links, index)=>(
                    <FooterLink key={index} props={links}/>
                ))}
            </div>
        </footer>
    );
}

function FooterLink({props}) {
    return (
        <Link to={'/' + props.toLowerCase()} className={'custom_link'}><p className='footer_link'>{props}</p></Link>
    )
}

export default Footer;