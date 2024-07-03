export default function Container({children, style, isLoaded}) {
    if (style) {
        return (
            <div style={{...style.main, ...(isLoaded && style.flyIn)}}>
                {children}
            </div>
        )
    } else {
        return (
            <div>
                {children}
            </div>
        )
    }
}