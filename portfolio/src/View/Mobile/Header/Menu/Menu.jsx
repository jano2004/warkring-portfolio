import NavContainer from "./NavContainer/NavContainer";
import { content } from "./NavContainer/NavItems/NavItemsContent";
import {useState} from "react";

export default function Menu({ currentSelected, setStatus}) {
    const [selected, setSelected] = useState(currentSelected);

    return (
        <div>
            <NavContainer content={content} selected={selected} setSelected={setSelected} setStatus={setStatus}/>
        </div>
    );
}