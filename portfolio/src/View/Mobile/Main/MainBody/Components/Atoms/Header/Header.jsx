import {style} from "./style";

export default function Header({type, children, isLoaded}) {
    if (type === 'h1') {
        return (
            <div style={{...style.h1, ...(isLoaded && style.flyIn)}}>
                {children}
            </div>
        )
    } else if (type === 'h2') {
        return (
            <div style={{...style.h2, ...(isLoaded && style.flyIn)}}>
                {children}
            </div>
        )
    }

}