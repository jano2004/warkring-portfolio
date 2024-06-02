import Select from "../Select/Select";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { colors } from "../../../../Services/ThemeService/Colors";
import {useEffect, useState} from "react";

export default function SelectOrganism({props, select, setSelect, page, setPage, date, setDate}) {
    const [dateIsFocused, setDateIsFocused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const printDate = () => {
        setDateIsFocused(false);
        if(select.includes('beratung')) {
            setSelect('beratung'+date);
        }
    }

    const handleForwardChangeOfPage = () => {
        if(select !== '') {
            setPage(page + 1);
        }
        console.log(select);
    }

    const handleBackChangeOfPage = () => {
        if (page <= 0) { return null; }
        else { setPage(page - 1); }
    }

    return (
        <div style={{
            ...style.section,
            flexDirection: windowWidth >= 1500 ? 'row' : 'column',
            alignItems: windowWidth >= 1500 ? 'start' : 'center',
            margin: windowWidth >= 1500 ? '50px 0 0 0' : '0 0 0 0'
        }}>
            <div style={style.headerContainer}>
                <h1 style={style.header}>{props.header}</h1>
                {windowWidth >= 1500 ?  <p style={style.text}>{props.text}</p> : null}
                {windowWidth >= 1500 ? <p style={style.underText}>{props.underText}</p> : null}
            </div>
            <div style={style.sectionContainer}>
                <div style={style.container}>
                    <Select props={props} select={select} setSelect={setSelect}/>
                    {select.includes('beratung') ?
                        <div style={{width: '415px'}}>
                            <div style={{height: '30px'}}></div>
                            <p style={style.dateInputText}>Wann passt es zeitlich für Sie?</p>
                            <input
                                style={dateIsFocused
                                    ? {...style.dateInput, ...style.dateInputTarget}
                                    : style.dateInput}
                                type={'datetime-local'}
                                onFocus={() => setDateIsFocused(true)}
                                onBlur={printDate}
                                onChange={e => setDate(e.target.value)}
                                value={date}
                            />
                        </div>
                        : null}
                    <div style={style.buttonContainer}>
                        <div style={{
                            ...style.button,
                            background: colors.selectableTileLightmode(false),
                            cursor: 'pointer',
                            width: (page === 0 ? '0' : '110px'),
                            border: page === 0 ? 0 : '1px solid ' + colors.navItemUnselectedColor(true)
                        }}
                             onClick={handleBackChangeOfPage}>
                            <IoIosArrowBack/>
                            <p>{page === 0 ? '' : 'Zurück'}</p>
                        </div>
                        <div style={{
                            ...style.button,
                            ...style.buttonText,
                            background: colors.selectableTileLightmode(select !== ''),
                            color: colors.mainTextColor(select !== ''),
                            cursor: 'pointer',
                            width: '110px'
                        }}
                             onClick={handleForwardChangeOfPage}>
                            <p>Weiter</p>
                            <IoIosArrowForward/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const style = {
    section: {
        display: 'flex',
        justifyContent: 'center',
        height: 'auto',
        width: '90%',
        background: ''
    },
    sectionContainer: {
        width: '40%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: ''
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        width: '40%',
        background: '',
    },
    header: {
        fontSize: '2rem',
        margin: '0 0 30px 0',
        textAlign: 'center'
    },
    text: {
        width: '100%',
        fontSize: '1.5rem',
        textAlign: 'center',
        margin: '30px 0 30px 0'
    },
    underText: {
        width: '100%',
        fontSize: '1.2rem',
        textAlign: 'center',
        margin: '0 0 30px 0',
        fontWeight: '200',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '55px',
        width: '415px',
        background: '',
        margin: '30px 0 0 0'
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: 'grey',
        borderRadius: '10px',
        border: '1px solid ' + colors.navItemUnselectedColor(true),
        transition: 'background 0.2s ease-in-out',
    },
    buttonText: {
        transition: 'color 0.2s ease-in-out'
    },
    infoText: {
        textAlign: 'center',
        width: '415px',
        fontWeight: '250',
        color: 'grey'
    },
    dateInput: {
        width: '100%',
        height: '55px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#333',
        outline: 'none',
        textIndent: '10px',
        border: '1px solid',
        transition: 'border 0.2s ease-in-out',
        borderColor: colors.navItemUnselectedColor(true),
    },
    dateInputTarget: {
        transition: 'border 0.2s ease-in-out',
        borderColor: colors.selectableTileLightmode(true)
    },
    dateInputText: {
        width: '100%',
        fontSize: '1.2rem',
        textAlign: 'center',
        margin: '0 0 10px 0',
        fontWeight: '200',
    }
}