import {style} from "./style";

export default function Section({children, alignment}) {
    if (alignment === 'left') {
        return ( <div style={{...style.left}}> {children} </div> )
    } else if (alignment === 'right') {
        return ( <div style={{...style.right}}> {children} </div> )
    } else {
        return ( <div style={{...style.main}}> {children} </div> )
    }

}