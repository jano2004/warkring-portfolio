import './NavItems.css';
export default function NavItems({iconSelected, iconUnselected, text, selected, setSelected}) {
    let convertedText = text.toString().toLowerCase();
    const handleClick = () => { setSelected(convertedText); };
    return (
        <div className='main_menu_nav'>
            <div className='main_menu_image_container' onClick={handleClick}>
                <img src={selected === convertedText ? iconSelected : iconUnselected} alt={'HomeIcon'}/>
            </div>
            <p style={{color: selected === convertedText ? '#313131' : '#7e7e7e'}}  onClick={handleClick}>{text}</p>
        </div>
    )
}