import {styles} from "./style";

export default function Card({header, text, side}) {
    if (side === 'LEFT') {
        return (
            <div style={{...styles.MAIN.CONTAINER.MAIN, ...styles.MAIN.CONTAINER.LEFT}}>
                <h1 style={{...styles.MAIN.TEXT, ...styles.MAIN.HEADER, ...styles.MAIN.LEFT}}>{header}</h1>
                <p style={{...styles.MAIN.TEXT, ...styles.MAIN.LEFT}}>{text}</p>
            </div>
        )
    }
    if (side === 'RIGHT') {
        return (
            <div style={{...styles.MAIN.CONTAINER.MAIN, ...styles.MAIN.CONTAINER.RIGHT}}>
                <h1 style={{...styles.MAIN.TEXT, ...styles.MAIN.HEADER, ...styles.MAIN.RIGHT}}>{header}</h1>
                <p style={{...styles.MAIN.TEXT, ...styles.MAIN.RIGHT}}>{text}</p>
            </div>
        )
    }

}