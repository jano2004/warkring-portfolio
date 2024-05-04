import './NavItems.css';
export default function NavItems({iconSelected, iconUnselected, text, selected, setSelected}) {
    let convertedText = text.toString().toLowerCase();
    const handleClick = () => { setSelected(convertedText); };
    return (
        <div className='main_menu_nav'>
            <div className='main_menu_image_container' onClick={handleClick}>
            </div>
            <p style={{color: selected === convertedText ? '#efefef' : '#7e7e7e', fontWeight: selected === convertedText ? '300' : '200'}}  onClick={handleClick}>{text}</p>
        </div>
    )
}