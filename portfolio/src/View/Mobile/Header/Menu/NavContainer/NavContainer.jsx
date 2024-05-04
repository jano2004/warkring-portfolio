import './NavContainer.css';
import NavItems from "./NavItems/NavItems";

export default function NavContainer({content, selected, setSelected}) {
    return (
        <container className='nav_container'>
            {content.map(item => (
                    <NavItems
                        key={item.text}
                        iconSelected={item.iconSelected} iconUnselected={item.iconUnselected}
                        text={item.text}
                        selected={selected} setSelected={setSelected}/>
            ))}
        </container>
    )
}