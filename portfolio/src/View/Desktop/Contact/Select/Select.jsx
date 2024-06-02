import {colors} from "../../../../Services/ThemeService/Colors";

export default function Select({props, select, setSelect}) {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px'
    };

    return (
        <div style={style}>
            {props.cardProps.map((item, index) => (
                <Tile props={item} select={select} setSelect={setSelect} key={index} id={props.id[index]}/>
            ))}
        </div>
    );
}

function Tile({props, select, setSelect, id}) {
    const propsText = id.toString().toLowerCase();

    const handleSelect = () => {
        if (select === propsText) { setSelect(''); }
        else { setSelect(propsText); console.log(propsText) }
    };

    const style = {
        container: {
            display: 'flex',
            height: '200px',
            width: '200px',
            background: colors.selectableTileLightmode(select === propsText),
            borderRadius: '15px',
            border: '1px solid ' + colors.navItemUnselectedColor(true),
            transition: 'background 0.2s ease-in-out',
            userSelect: 'none'
        },
        header: {
            width: '100%',
            fontWeight: '340',
            fontSize: '1.4rem',
            textAlign: 'center',
            color: colors.mainTextColor(select === propsText),
            transition: 'color 0.2s ease-in-out',
            userSelect: 'none'
        }
    };

    return (
        <div style={{...style.container, cursor: 'pointer'}} onClick={handleSelect}>
            <p style={style.header}>{props}</p>
        </div>
    );
}