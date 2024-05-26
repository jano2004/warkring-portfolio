import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import RadioSelect from "../Content/Molecules/RadioSelect";
import {colors} from "../../../../../Services/ThemeService/Colors";

export default function Firstpage({selected, setSelected, props, pageState, setPageState}) {

    const handleForward = () => {
        if(selected === null && pageState === 0) {
            setPageState(pageState => pageState + 2)
        } else {
            setPageState(pageState => pageState + 1)
            console.log('new pageState:' + pageState);
        }
    }

    const handleBackward = () => {
        if(pageState === 2) {
            setPageState(pageState => pageState - 2)
        } else {
            setPageState(pageState => pageState - 1)
            console.log('new pageState:' + pageState);
        }
    }

    const [isDarkMode] = useDarkMode();

    return (
        <div style={{height: '90vh', background: colors.mainBackgroundColor(isDarkMode)}}>
            <div style={styles.mainContainer}>
                <div style={styles.headerText.container}>
                    <h1 style={{...styles.headerText.header, color: colors.mainTextColor(isDarkMode)}}>{props.header}</h1>
                    <p style={{...styles.headerText.text, color: colors.mainTextColor(isDarkMode)}}>{props.description}</p>
                </div>
                <div style={styles.radioSelect.container}>
                    <RadioSelect content={props.content} selected={selected} setSelected={setSelected}/>
                    <p style={styles.radioSelect.text}>{props.missing}</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: pageState === 0 ? 'end' : 'space-between',
                        width: '87%',
                        marginTop: '10px'
                    }}>
                        <div style={{
                            display: pageState === 0 ? 'none' : 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            background: colors.selectableTileUnselectedColor(false),
                            border: '1px solid #C4C4C4',
                            padding: '5px 10px 5px 7px',
                            borderRadius: '7px',
                            cursor: 'pointer'}}
                             onClick={handleBackward}>
                            <IoChevronBackOutline/>
                            <p style={{
                                margin: '0 0 0 5px',
                                color: colors.cardBorderColor(true),
                                fontSize: '16px',
                                fontWeight: '400',
                                textAlign: 'center',
                                width: '90%'
                            }}>Zurück</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            background: selected === null ? colors.selectableTileUnselectedColor(false, isDarkMode) : colors.selectableTileUnselectedColor(true, isDarkMode),
                            border: '1px solid #C4C4C4',
                            padding: '5px 7px 5px 10px',
                            borderRadius: '7px',
                            transition: 'background 0.2s, color 0.2s',
                            cursor: 'pointer'}}
                             onClick={handleForward}>
                            <p style={{
                                margin: '0 5px 0 0',
                                color: selected === null ? colors.cardBorderColor(!isDarkMode) : colors.cardBorderColor(false, isDarkMode),
                                fontSize: '16px',
                                fontWeight: '400',
                                textAlign: 'center',
                                width: '90%'
                            }}>Weiter</p>
                            <IoChevronForwardOutline
                                color={selected === null ? colors.cardBorderColor(!isDarkMode) : colors.cardBorderColor(false)}/>
                        </div>
                    </div>
                </div>
                <div style={styles.progressBar.container}>
                    <div style={{
                        ...styles.progressBar.progress,
                        width: selected === null ? pageState * 20 + 2 + '%' : (pageState * 20 + 20 + 2) + '%'
                    }}></div>
                    <div style={styles.progressBar.nonProgress}></div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    mainContainer: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    },
    headerText: {
        container: {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            margin: '0 0 40px 0'
        },
        header: {
            textAlign: 'center', fontWeight: '700', fontSize: '24px',
            marginTop: '0'
        },
        text: {
            width: '90%',
            textAlign: 'center', fontWeight: '300', fontSize: '20px',
            margin: '0'
        }
    },
    radioSelect: {
        container: {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            margin: '0 0 30px 0'
        },
        text: {
            width: '85%',
            textAlign: 'center', fontWeight: '200', fontSize: '12px',
            margin: '10px 0 0 0',
            color: '#838383'
        }
    },
    progressBar: {
        container: {
            width: '82%', height: '7px',
            display: 'flex', flexDirection: 'row'
        },
        progress: {
            position: 'absolute',
            height: '7px',
            borderRadius: '10px', borderTop: '1px solid #BDBDBD', borderBottom: '1px solid #BDBDBD', borderLeft: '1px solid #BDBDBD',
            background: '#588157',
            transition: 'width 0.5s ease-in-out'
        },
        nonProgress: {
            width: '100%', height: '7px',
            borderRadius: '10px', borderTop: '1px solid #BDBDBD', borderBottom: '1px solid #BDBDBD', borderRight: '1px solid #BDBDBD',
            background: 'transparent',
        }
    }
}