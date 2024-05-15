import {useState} from "react";
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import {colors} from "../../../../../Services/ThemeService/Colors";

export default function TextInput({id, placeholder, value, setValue}) {

    const [target, setTarget] = useState(false);

    const [isDarkMode] = useDarkMode();

    const toggleTarget = () => {
        setTarget(!target);
    }

    const style = {
        fontSize: '17px',
        width: '80%',
        height: '25px',
        margin: '0 0 10px 0',
        background: colors.cardBackgroundColor(isDarkMode),
        color: colors.mainTextColor(isDarkMode),
        border: '1px solid' + colors.cardBorderColor(isDarkMode)
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