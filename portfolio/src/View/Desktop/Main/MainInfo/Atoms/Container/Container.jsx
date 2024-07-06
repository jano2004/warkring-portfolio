import {style} from "./style";

export default function Container({children}) {
    return (
        <div style={{...style.main}}>
            {children}
        </div>
    )
}