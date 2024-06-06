import React, {useState} from 'react';
import { colors } from "../../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../../Services/ThemeService/ThemeService";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import {sendMail} from "../../MailService/ContactMailService";
import { cssVariables } from '../../../../../Services/abstand';

export default function PersonalData({ pageState, setPageState, selectedHauptziel, selectSecondaryGoal, selectMainGoal}) {
    const [isDarkMode] = useDarkMode();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNumberChange = (e) => setNumber(e.target.value);
    const handleExtrasChange = (e) => setExtras(e.target.value);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [extras, setExtras] = useState('');

    const handleSubmit = () => {
        sendMail(name, email, number, selectedHauptziel, selectSecondaryGoal, selectMainGoal, extras);
    };

    const handleBackward = () => {
        if (pageState === 2) {
            setPageState(pageState => pageState - 2);
        } else {
            setPageState(pageState => pageState - 1);
            console.log('new pageState:' + pageState);
        }
    };

    const inputStyle = {
        width: '120%',
        fontSize: cssVariables['--font_body_text'],
        background: colors.cardBackgroundColor(isDarkMode),
        border: 'none',
        borderRadius: '7px',
        margin: '0 0 10px 0',
        boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)': '0 2px 4px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={{height: '90vh', background: colors.mainBackgroundColor(isDarkMode) }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={styles.headerText.container}>
                    <h1 style={{ ...styles.headerText.header, color: colors.mainTextColor(isDarkMode) }}>Jetzt zu Ihnen</h1>
                    <p style={{ ...styles.headerText.text, color: colors.mainTextColor(isDarkMode) }}>Wir brauchen noch ein paar persönliche Daten von Ihnen.</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="Vor- und Nachname"
                        value={name}
                        onChange={handleNameChange}
                        style={{ ...inputStyle, height: '30px' }}
                        autoComplete={"given-name"}
                    />
                    <input
                        type="email"
                        placeholder="E-Mail-Adresse"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ ...inputStyle, height: '30px' }}
                    />
                    <input
                        type="tel"
                        placeholder="Telefonnummer"
                        value={number}
                        onChange={handleNumberChange}
                        style={{ ...inputStyle, height: '30px' }}
                    />
                    <textarea
                        placeholder="Sonstiges..."
                        value={extras}
                        onChange={handleExtrasChange}
                        style={{ ...inputStyle, height: '130px' }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: pageState === 0 ? 'end' : 'space-between',
                    width: '83%',
                    marginTop: '77px',
                    marginBottom: cssVariables['--height_body_to_body_space'],
                }}>
                    <div style={{
                        display: pageState === 0 ? 'none' : 'flex', flexDirection: 'row', alignItems: 'center',
                        background: colors.selectableTileUnselectedColor(false, isDarkMode),
                        boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)': '0 2px 4px rgba(0, 0, 0, 0.2)',
                        borderRadius: '5px',
                        padding: '8px 16px',
                    }}
                         onClick={handleBackward}>
                        <IoChevronBackOutline
                            color={colors.cardBorderColor(!isDarkMode)} />
                        <p style={{
                            margin: '0 0 0 5px',
                            color: colors.cardBorderColor(!isDarkMode),
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
                        background: colors.selectableTileUnselectedColor(true, isDarkMode),
                        boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)': '0 2px 4px rgba(0, 0, 0, 0.2)',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        transition: 'background 0.2s, color 0.2s',
                        cursor: 'pointer'
                    }}
                         onClick={handleSubmit}>
                        <p style={{
                            margin: '0 5px 0 0',
                            color: colors.cardBorderColor(false, isDarkMode),
                            fontSize: cssVariables['--font_body_text'],
                            fontWeight: 'normal',
                            textAlign: 'center',
                            width: '90%',
                        }}>Absenden</p>
                        <MdOutlineMarkunreadMailbox
                            color={colors.cardBorderColor(false)} />
                    </div>
                </div>
                <div style={styles.progressBar.container}>
                    <div style={{
                        ...styles.progressBar.progress,
                        width: (name === '' && email === '' && number === '') ? 3 * 20 + 2 + '%' : 4 * 20 + 2 + '%'
                    }}></div>
                    <div style={styles.progressBar.nonProgress}></div>
                </div>
            </div>
        </div>
    );
}


const styles = {
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