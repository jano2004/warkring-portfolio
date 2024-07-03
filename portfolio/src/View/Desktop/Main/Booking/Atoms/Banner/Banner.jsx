import {style} from "./style";

export default function Banner({ children }) {
    return (
        <div style={{...style.banner.container, ...style.banner.text}}>
            {children}
        </div>
    )
}