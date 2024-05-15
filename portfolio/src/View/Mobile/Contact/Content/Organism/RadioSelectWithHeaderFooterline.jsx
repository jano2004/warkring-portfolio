import RadioSelect from "../Molecules/RadioSelect";
import {colors} from "../../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
export default function RadioSelectWithHeaderFooterLine({id, header, content, selected, setSelected, scrollToNextComponent}) {

    const [isDarkMode] = useDarkMode();

    const styleContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const styleHeader = {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '300',
        color: colors.mainTextColor(isDarkMode),
        padding: '0',
        margin: '30px 0 25px 0'
    }

    const styleLine = {
        height: '1px',
        width: '100%',
        background: colors.mainTextColor(isDarkMode),
        margin: '30px 0 0 0'
    }

    return (
        <div id={id} style={styleContainer}>
            <h1 style={styleHeader}>{header}</h1>
            <RadioSelect content={content}
                         selected={selected}
                         setSelected={setSelected}
                         scrollToNextComponent={scrollToNextComponent}/>
            <div style={styleLine}></div>
        </div>
    )
}