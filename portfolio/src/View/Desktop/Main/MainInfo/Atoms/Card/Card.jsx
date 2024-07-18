import { style } from "./style";
import { useState } from "react";

import { FaPlay } from "react-icons/fa";

export default function Card({ icon, text, header, size, transition, render }) {
    const [focus, setFocus] = useState(false);
    return (
        <Container render={render} size={size} transition={transition} focus={focus} setFocus={setFocus} icon={icon}>
            {focus ? <Description header={header} text={text}/> : icon}
        </Container>
    );
}

const Container = ({ children, size, render, focus, transition, setFocus, icon }) => {

    const cardStyle = size
        ? {
            ...style.main,
            height: `${size}px`,
            width: `${size}px`
        }
        : { ...style.main };

    return (
        <div
            style={{
                ...cardStyle,
                transform: `${!render && transition ? transition.X : ''} ${!render && transition ? transition.Y : ''}`,
                transition: 'all 0.7s ease-in-out' }}
            onClick={() => setFocus(!focus)}>
            {children}
        </div>
    );
};

const Description = ({header, text}) => {
    return (
        <div style={{...style.description.main}}>
            <h1 style={{...style.description.header}}>{header}</h1>
            <p style={{...style.description.text}}>{text}</p>
            <button style={{...style.description.button}}><FaPlay/>Video ansehen</button>
        </div>
    )
}
