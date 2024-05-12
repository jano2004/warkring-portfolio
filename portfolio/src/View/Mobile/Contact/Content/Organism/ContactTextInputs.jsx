import TextInput from "../Atoms/TextInput";
export default function ContactTextInputs({id, header, props}) {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 'auto',
        width: '100%',
    }

    const styleHeader = {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '300',
        color: '#F8F8F8',
        padding: '0',
        margin: '30px 0 25px 0'
    }

    return (
        <div style={style}>
            <h1 style={styleHeader}>{header}</h1>
            {props.map(item => (
                <TextInput id={id} placeholder={item.placeholder} value={item.value} setValue={item.setValue}/>
            ))}
        </div>
    )
}