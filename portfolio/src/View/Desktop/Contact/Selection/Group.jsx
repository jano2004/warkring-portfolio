import SelectableTile from "./SelectableTile";
import {useState} from "react";
import {content} from '../EmailContent';

export default function Group({header, text}) {

    const [select, setSelect] = useState('vorstellung')
    const [target, setTarget] = useState(false);
    const [inputTarget, setInputTarget] = useState('');

    const [terminDate, setTerminDate] = useState();
    const [vorstellungen, setVorstellungen] = useState('');

    const [dropdownMaingoal, setDropdownMaingoal] = useState(0);
    const [dropdownTopic, setDropdownTopic] = useState(0);

    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [email, setEmail] = useState('');
    const [vorwahl, setVorwahl] = useState('');
    const [rufnummer, setRufnummer] = useState('');

    //const [emailText, setEmailText] = useState()

    const [hover, setHover] = useState(false);

    const [send, setSend] = useState(false);

    const handleSend = () => {
        if(send) {
            return;
        }
        setSend(true);
    }

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

    const emailText =
        'Hallo Warkring-Team, '
        + '\n\nhiermit möchte ich eine Anfrage auf ein Projekt bei Euch stellen.'
        + '\n\nIch bin auf der Suche nach ' + content.mainGoal[dropdownMaingoal]
        + '\nmit dem Hauptthema "'
        + (dropdownMaingoal === 0 ? content.topicInfo[dropdownTopic] :
            dropdownMaingoal === 1 ? content.topicBildung[dropdownTopic] :
                dropdownMaingoal === 2 ? content.topicPortfolio[dropdownTopic] :
                    dropdownMaingoal === 3 ? content.topicMarketing[dropdownTopic] :
                        '') + '".\n'
        + (select === 'vorstellung' ? 'Ich habe schon genaue Vorstellungen und die lauten: ' + vorstellungen
            : 'Allerdings brauche ich noch etwas Beratung, erreichbar bin ich am besten am: ' + terminDate)
        + '\n\nKontaktiert mich gerne über meine E-Mail-Adresse: ' + email
        + (rufnummer !== '' ? ' oder telefonisch unter ' + vorwahl + ' ' + rufnummer : '')
        + '\n\nMit freundlichen Grüßen\n\n' + vorname + ' ' + nachname;

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(emailText);
            alert('Der Text wurde in Deine Zwischenablage kopiert!');
        } catch (err) {
            alert('Konnte nicht kopiert werden: ' + err);
        }
    };

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
            height: '1400px',
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
                        border: target ? '2px solid #529552' : '2px solid #D9D9D9'}}
                              placeholder={'So stelle ich mir meine Website vor... (Optional)'}
                              onFocus={() => setTarget(true)}
                              onBlur={() => setTarget(false)}
                              onChange={(event) => setVorstellungen(event.target.value)}/> : null}
                {select === 'beratung' ?
                    <input type='datetime-local' style={{
                               ...style.dateTimePicker,
                               border: target ? '2px solid #529552' : '2px solid #D9D9D9'}}
                           onChange={(event) => setTerminDate(event.target.value)}
                           onFocus={() => setTarget(true)}
                           onBlur={() => setTarget(false)}
                           value={terminDate}
                        />
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
                               onBlur={() => setInputTarget('')}
                               onChange={(event) => setVorname(event.target.value)}
                        />
                        <input type={'text'}
                               style={{
                                   ...style.input,
                                   border: inputTarget === 'nachname' ? '2px solid #529552' : '2px solid #D9D9D9'
                               }}
                               placeholder={'Nachname'}
                               onFocus={() => setInputTarget('nachname')}
                               onBlur={() => setInputTarget('')}
                               onChange={(event) => setNachname(event.target.value)}/>
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
                           onBlur={() => setInputTarget('')}
                           onChange={(event) => setEmail(event.target.value)}/>
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
                           onBlur={() => setInputTarget('')}
                           onChange={(event) => setVorwahl(event.target.value)}/>
                    <input type={'numeric'}
                           style={{
                               ...style.input,
                               border: inputTarget === 'rufnummer' ? '2px solid #529552' : '2px solid #D9D9D9',
                               width: '85%'
                           }}
                           placeholder={'Rufnummer'}
                           onFocus={() => setInputTarget('rufnummer')}
                           onBlur={() => setInputTarget('')}
                           onChange={(event) => setRufnummer(event.target.value)}/>
                </div>
            </div>
            <div>
                <div style={{height: '40px'}}/>
                <div style={{...style.sendButton, background: hover ? '#007AFF' : '#529552'}}
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                     onClick={handleSend}>
                    <p style={{margin: 0}}>Absenden</p>
                </div>
                {send ? null : <div style={{height: '40px'}}/>}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    width: '100%'}}>

                {send ? <p style={{width: '100%', textAlign: 'center', color: 'red'}}>
                    Unser E-Mail-Server ist derzeit nicht verfügbar. <br/>
                    Kopiere den Text indem Du ihn anklickst.<br/>
                    Sende diesen dann an: kontakt@warkring.org
                </p> : null}
                {send ?
                    <textarea style={{
                        ...style.outputTextarea,
                        border: target ? '2px solid #529552' : '2px solid #D9D9D9',
                    }}
                              onFocus={() => setTarget(true)}
                              onBlur={() => setTarget(false)}
                              readOnly={true}
                              onClick={copyTextToClipboard}
                              value={emailText}>
                </textarea>
                    : null}
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
        userSelect: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
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
        height: '170px',
        width: 'calc(85% - 20px)',
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
        cursor: 'pointer',
        appearance: 'none',
        webkitAppearance: 'none'
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
    },
    outputTextarea: {
        height: '300px',
        width: 'calc(85% - 20px)',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        resize: 'none',
        padding: ' 15px 0 0 20px',
        outline: 'none',
        userSelect: 'none',
        cursor: 'pointer'
    }
}