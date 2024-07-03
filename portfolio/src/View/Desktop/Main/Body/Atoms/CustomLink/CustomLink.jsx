import {useState} from "react";
import { Link } from 'react-router-dom';

export default function CustomLink({ destination, description, style }) {
    const [hover, setHover] = useState(false);

    return (
        <Link to={'/' + destination} style={{textDecoration: 'none'}}>
            <div style={{ ...style.main, ...(hover && style.hover) }}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}>
                <p style={{ ...style.text.main, ...(hover && style.text.hover)}}>
                    {description}
                </p>
            </div>
        </Link>
    );
}