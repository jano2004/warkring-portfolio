import './NavItems.css';
import {Link} from "react-router-dom";
export default function NavItems({iconSelected, iconUnselected, text, selected, setSelected, setStatus }) {
    let convertedText = text.toString().toLowerCase();
    const handleClick = () => {
        setSelected(convertedText);
        setStatus = convertedText;
    };

    return (
        <div className='main_menu_nav'>
            <div className='main_menu_image_container' onClick={handleClick}>
            </div>
            <Link to={convertedText === 'home' ? '/' : '/' + convertedText } className={'custom_link'}><p style={{color: selected === convertedText ? '#efefef' : '#7e7e7e', fontWeight: selected === convertedText ? '300' : '200'}}  onClick={handleClick}>{text}</p></Link>
        </div>
    )
}