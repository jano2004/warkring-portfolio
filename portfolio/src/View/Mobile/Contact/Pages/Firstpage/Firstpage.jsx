import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import RadioSelect from "../Content/Molecules/RadioSelect";
import {colors} from "../../../../../Services/ThemeService/Colors";
import { cssVariables } from "../../../../../Services/abstand";

export default function Firstpage({selected, setSelected, props, pageState, setPageState, isLoaded}) {

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

    return (
        <div style={{background: colors.mainBackgroundColor}}>
            <div style={{ ...styles.mainContainer, ...(isLoaded && styles.mainContainerFlyIn)}}>
                <div style={styles.headerText.container}>
                    <h1 style={{...styles.headerText.header, color: colors.mainTextColor}}>{props.header}</h1>
                    <p style={{...styles.headerText.text, color: colors.mainTextColor}}>{props.description}</p>
                </div>
                <div style={styles.radioSelect.container}>
                    <RadioSelect content={props.content} setSelected={setSelected}/>
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
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '5px',
                            padding: '8px 16px',
                            cursor: 'pointer'}}
                             onClick={handleBackward}>
                            <IoChevronBackOutline
                                color= {colors.mainTextColor}/>
                            <p style={{
                                margin: '0 0 0 5px',
                                color: colors.mainTextColor,
                                fontSize: cssVariables['--font_body_text'],
                                fontWeight: 'normal',
                                textAlign: 'center',
                                width: '90%',
                            }}>Zurück</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            background: selected === null ? colors.selectableTileUnselectedColor(false) : colors.selectableTileUnselectedColor(true),
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '5px',
                            padding: '8px 16px',
                            transition: 'background 0.2s, color 0.2s',
                            cursor: 'pointer'}}
                             onClick={handleForward}>
                            <p style={{
                                margin: '0 5px 0 0',
                                color: selected === null ? colors.mainTextColor: colors.cardBorderColor,
                                fontSize: cssVariables['--font_body_text'],
                                fontWeight: 'normal',
                                textAlign: 'center',
                                width: '90%',
                            }}>Weiter</p>
                            <IoChevronForwardOutline
                                color={selected === null ? colors.mainTextColor : colors.cardBorderColor}/>
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
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        transform: 'translateY(100%)',
        opacity: 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    },
    mainContainerFlyIn: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    headerText: {
        container: {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            marginBottom: cssVariables['--height_body_to_body_space'],
        },
        header: {
            textAlign: 'center', 
            fontWeight: 'bold', 
            fontSize: cssVariables['--font_body_heading'],
            marginTop: '0'
        },
        text: {
            width: '90%',
            textAlign: 'center', 
            fontWeight: 'normal', 
            fontSize: cssVariables['--font_body_text'],
            margin: '0'
        }
    },
    radioSelect: {
        container: {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            marginBottom: cssVariables['--height_body_to_body_space'],
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
            background: colors.mainAccentColor,
            transition: 'width 0.5s ease-in-out'
        },
        nonProgress: {
            width: '100%', height: '7px',
            borderRadius: '10px', borderTop: '1px solid #BDBDBD', borderBottom: '1px solid #BDBDBD', borderRight: '1px solid #BDBDBD',
            background: 'transparent',
        }
    }
}