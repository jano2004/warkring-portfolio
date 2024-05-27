import NavItems from "./NavItems/NavItems";

export default function NavContainer({content, selected, setSelected, setStatus}) {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '85%'
    }
    return (
        <container style={style}>
            {content.map(item => (
                    <NavItems
                        key={item.text}
                        icon={item.icon}
                        text={item.text}
                        selected={selected} setSelected={setSelected}
                        setStatus={setStatus}/>
            ))}
        </container>
    )
}