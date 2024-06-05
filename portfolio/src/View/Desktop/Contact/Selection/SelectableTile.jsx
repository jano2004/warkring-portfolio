export default function SelectableTile({props}) {
    const handleChange = () => {
        props.setSelect(props.id);
    }

    const style = {
        main: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '85%',
            height: '100px',
            background: '#FFFFFF',
            border: props.select === props.id ? '2px solid #529552' : '2px solid #D9D9D9',
            borderRadius: '10px',
            transition: 'all 0.15s ease-in-out',
            cursor: 'pointer'
        },
        headerTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'start',
            height: '70%',
            margin: '30px',
        },
        header: {
            fontSize: '22px',
            fontWeight: '600',
            color: '#529552',
            margin: '0'
        },
        text: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#000000',
            margin: '0'
        },
    }
    return (
        <div style={style.main} onClick={handleChange}>
            <div style={style.headerTextContainer}>
                <h1 style={{...style.header, userSelect: 'none'}}>{props.header}</h1>
                <p style={{...style.text, userSelect: 'none'}}>{props.text}</p>
            </div>
        </div>
    )
}
