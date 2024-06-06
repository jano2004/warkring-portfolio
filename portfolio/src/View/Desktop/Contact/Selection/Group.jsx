import SelectableTile from "./SelectableTile";
import {useState} from "react";

export default function Group({header, text}) {

    const [select, setSelect] = useState('')
    const [target, setTarget] = useState(false);
    const [inputTarget, setInputTarget] = useState('');

    const [dropdownMaingoal, setDropdownMaingoal] = useState(0);
    const [dropdownTopic, setDropdownTopic] = useState(0);

    const [hover, setHover] = useState(false);

    const first = {
        header: 'Ich habe genaue Vorstellungen',
        text: 'Wenn du genau weißt was du willst, gebe es uns in ein paar Sätzen mit',
        select: select,
        setSelect: setSelect,
        id: 'vorstellung'
    }
    const second = {
        header: 'Ich brauche eine Beratung',
        text: 'Wenn du eine Beratung brauchst, gebe uns einen Termin, an dem du Zeit hast',
        select: select,
        setSelect: setSelect,
        id: 'beratung'
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '10px',
            marginTop: '40px',
            paddingTop: '40px',
            maxHeight: '1200px',
            overflowY: 'scroll'
        }}>
            <h1 style={style.header}>Deine Vorstellungen</h1>
            <p style={style.text}>Weißt du schon, wie deine Traum-Website aussieht? *</p>
            <div style={style.selectContainer}>
                <SelectableTile props={first}/>
                <SelectableTile props={second}/>
            </div>
            <div style={style.textDateContainer}>
                {select === 'vorstellung' ?
                    <textarea style={{
                        ...style.textarea,
                        border: target ? '2px solid #529552' : '2px solid #D9D9D9'
                    }}
                              placeholder={'So stelle ich mir meine Website vor... (Optional)'}
                              onFocus={() => setTarget(true)}
                              onBlur={() => setTarget(false)}/>
                    : select === 'beratung' ? <input type='datetime-local' style={{
                            ...style.dateTimePicker,
                            border: target ? '2px solid #529552' : '2px solid #D9D9D9'
                        }}
                                                     onFocus={() => setTarget(true)}
                                                     onBlur={() => setTarget(false)}/>
                        : null}
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <div style={{height: '40px'}}/>
                <h1 style={style.header}>Thema der Website</h1>
                <p style={style.text}>Für was möchtest du deine Website erstellen? *</p>
                <select
                    style={style.select}
                    onChange={event => setDropdownMaingoal(event.target.options.selectedIndex)}
                    value={dropdownMaingoal}>
                    <option value={0}>Informationswebsite</option>
                    <option value={1}>Bildungs-/ Trainingswebseite</option>
                    <option value={2}>Portfolio-/ Präsentationswebseite</option>
                    <option value={3}>Marketing-/ Werbungswebseite</option>
                </select>
                {dropdownMaingoal === 0 ? <select
                    style={style.select}
                    onChange={event => setDropdownTopic(event.target.options.selectedIndex)}
                    value={dropdownTopic}>
                    <option value={0}>Über uns / Unternehmensinformation</option>
                    <option value={1}>News- und Eventplattform</option>
                    <option value={2}>Öffentliche Dienstleistungen</option>
                    <option value={3}>Wissensdatenbanken und FAQ</option>
                </select> : null}
                {dropdownMaingoal === 1 ? <select
                    style={style.select}
                    onChange={event => setDropdownTopic(event.target.options.selectedIndex)}
                    value={dropdownTopic}>
                    <option value={0}>Akademische Institutionen</option>
                    <option value={1}>Online-Tutorial-Seiten</option>
                    <option value={2}>Berufliche Fortbildung</option>
                    <option value={3}>Sprachlernplattformen</option>
                </select> : null}
                {dropdownMaingoal === 2 ? <select
                    style={style.select}
                    onChange={event => setDropdownTopic(event.target.options.selectedIndex)}
                    value={dropdownTopic}>
                    <option value={0}>Künstler- und Designerportfolios</option>
                    <option value={1}>Firmenpräsentationen</option>
                    <option value={2}>Freiberufler-Showcases</option>
                    <option value={3}>Architektur- und Immobilienportfolios</option>
                </select> : null}
                {dropdownMaingoal === 3 ? <select
                    style={style.select}
                    onChange={event => setDropdownTopic(event.target.options.selectedIndex)}
                    value={dropdownTopic}>
                    <option value={0}>Produktlaunch-Seiten</option>
                    <option value={1}>Kampagnen-spezifische Seiten</option>
                    <option value={2}>Affiliate-Marketing-Seiten</option>
                    <option value={3}>Brand-Promotion-Seiten</option>
                </select> : null}
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <div style={{height: '40px'}}/>
                <h1 style={style.header}>Personenbezogene Daten</h1>
                <p style={style.text}>Wir brauchen noch ein paar Daten um dich zu kontaktieren? *</p>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '7px'}}>
                    <p style={style.inputLabel}>Vor- und Zuname *</p>
                    <div style={{width: '85%', display: 'flex', justifyContent: 'center', gap: '7px'}}>
                        <input type={'text'}
                               style={{
                                   ...style.input,
                                   border: inputTarget === 'vorname' ? '2px solid #529552' : '2px solid #D9D9D9'
                               }}
                               placeholder={'Vorname'}
                               onFocus={() => setInputTarget('vorname')}
                               onBlur={() => setInputTarget('')}/>
                        <input type={'text'}
                               style={{
                                   ...style.input,
                                   border: inputTarget === 'nachname' ? '2px solid #529552' : '2px solid #D9D9D9'
                               }}
                               placeholder={'Nachname'}
                               onFocus={() => setInputTarget('nachname')}
                               onBlur={() => setInputTarget('')}/>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '7px'}}>
                    <p style={style.inputLabel}>Kontaktdaten *</p>
                    <input type={'text'}
                           style={{
                               ...style.input,
                               border: inputTarget === 'email' ? '2px solid #529552' : '2px solid #D9D9D9'
                           }}
                           placeholder={'E-Mail-Adresse'}
                           onFocus={() => setInputTarget('email')}
                           onBlur={() => setInputTarget('')}/>
                </div>
                <div style={{width: '85%', display: 'flex', justifyContent: 'center', gap: '7px'}}>
                    <input type={'text'}
                           style={{
                               ...style.input,
                               border: inputTarget === 'vorwahl' ? '2px solid #529552' : '2px solid #D9D9D9',
                               width: '15%',
                           }}
                           placeholder={'Vorwahl'}
                           onFocus={() => setInputTarget('vorwahl')}
                           onBlur={() => setInputTarget('')}/>
                    <input type={'text'}
                           style={{
                               ...style.input,
                               border: inputTarget === 'rufnummer' ? '2px solid #529552' : '2px solid #D9D9D9',
                               width: '85%'
                           }}
                           placeholder={'Rufnummer'}
                           onFocus={() => setInputTarget('rufnummer')}
                           onBlur={() => setInputTarget('')}/>
                </div>
            </div>
            <div>
                <div style={{height: '40px'}}/>
                <div style={{...style.sendButton, background: hover ? '#007AFF' : '#529552'}}
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}>
                    <p style={{margin: 0}}>Absenden</p>
                </div>
                <div style={{height: '40px'}}/>
            </div>
        </div>
    )
}

const style = {
    header: {
        width: '85%',
        fontSize: '32px',
        fontWeight: '700',
        color: '#529552',
        margin: '0 0 17px 5px',
        textAlign: 'left',
        userSelect: 'none'
    },
    text: {
        width: '85%',
        fontSize: '16px',
        fontWeight: '400',
        color: 'black',
        margin: '0 0 20px 5px',
        textAlign: 'left',
        userSelect: 'none'
    },
    selectContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px'
    },
    textDateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textarea: {
        height: '200px',
        width: 'calc(85% - 20px)',
        resizable: 'false',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        resize: 'none',
        padding: ' 15px 0 0 20px',
        outline: 'none'
    },
    dateTimePicker: {
        width: 'calc(85% - 60px)',
        height: '70px',
        padding: '0 40px 0 20px',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        outline: 'none'
    },
    input: {
        width: 'calc(85% - 20px)',
        height: '70px',
        padding: '0 0 0 20px',
        borderRadius: '10px',
        fontSize: '20px',
        outline: 'none',
        transition: 'all 0.1s ease-in-out'
    },
    inputLabel: {
        width: '85%',
        textAlign: 'left',
        margin: '10px 0 0 5px',
        fontWeight: '200',
        userSelect: 'none'
    },
    select: {
        width: '85%',
        height: '70px',
        padding: '0 0 0 20px',
        fontSize: '17px',
        borderRadius: '10px',
        border: '2px solid #D9D9D9',
        background: 'white',
        cursor: 'pointer'
    },
    sendButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17px 35px 17px 35px',
        color: 'white',
        fontSize: '17px',
        borderRadius: '10px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '400',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s ease-in-out'
    }
}