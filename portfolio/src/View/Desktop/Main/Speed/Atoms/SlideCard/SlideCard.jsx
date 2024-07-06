import {style} from "./style";

export default function SlideCard({content, background, border, activate, hover, setHover}) {
    return (
        <div style={{...style.main.container, ...(activate && style.main.flyIn)}}>
            <p style={{
                ...style.main.text,
                background: background,
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px'}}
               onMouseEnter={() => setHover(!hover)}
               onMouseLeave={() => setHover(!hover)}>
                {content}
            </p>
        </div>
    )
}
