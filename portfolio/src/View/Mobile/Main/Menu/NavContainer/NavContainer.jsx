import './NavContainer.css';
import NavItems from "./NavItems/NavItems";
import {useState} from "react";
import { content } from "./NavItems/NavItemsContent";

export default function NavContainer() {
    const [selected, setSelected] = useState('home');

    return (
        <container className='nav_container'>
            {content.map(item => (
                <NavItems
                    key={item.text}
                    iconSelected={item.iconSelected} iconUnselected={item.iconUnselected}
                    text={item.text}
                    selected={selected} setSelected={setSelected}
                />
            ))}
        </container>
    )
}