export default function Area({children, style}) {
    if (style) {
        return (
            <section style={{...style}}>
                {children}
            </section>
        )
    } else {
        return (
            <section>
                {children}
            </section>
        )
    }
}