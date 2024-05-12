import {useState} from "react";

export default function TextInput({id, placeholder, value, setValue}) {

    const [target, setTarget] = useState(false);

    const toggleTarget = () => {
        setTarget(!target);
    }

    const style = {
        fontSize: '17px',
        width: '80%',
        height: '25px',
        margin: '0 0 10px 0',
        background: '#171717',
        color: '#F8F8F8'
    }

    const styleTargeted = {
        fontSize: '17px',
        width: '80%',
        height: '25px',
        margin: '0 0 10px 0',
        background: '#F8F8F8'
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <input id={id}
               type={'text'}
               style={target ? styleTargeted : style}
               placeholder={placeholder}
               value={value}
               onChange={handleInputChange}
               onFocus={toggleTarget}
               onBlur={toggleTarget}/>
    )
}