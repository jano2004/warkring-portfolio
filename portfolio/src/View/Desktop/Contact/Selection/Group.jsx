import SelectableTile from "./Props/SelectableTile";
import SelectDropdown from "./Props/DropdownSelect";
import {useState} from "react";
import {content, dropdownContent, style} from '../Content';

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
        <div style={{...style.main}}>
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
                        border: target ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9'}}
                              placeholder={'So stelle ich mir meine Website vor... (Optional)'}
                              onFocus={() => setTarget(true)}
                              onBlur={() => setTarget(false)}
                              onChange={(event) => setVorstellungen(event.target.value)}/> : null}
                {select === 'beratung' ?
                    <input type='datetime-local' style={{
                               ...style.dateTimePicker,
                               border: target ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9'}}
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
                <SelectDropdown items={dropdownContent.goal} setSelectedIndex={setDropdownMaingoal} selectedIndex={dropdownMaingoal}/>
                {dropdownMaingoal === 0 && <SelectDropdown items={dropdownContent.info} setSelectedIndex={setDropdownTopic} selectedIndex={dropdownTopic}/> }
                {dropdownMaingoal === 1 && <SelectDropdown items={dropdownContent.bildung} setSelectedIndex={setDropdownTopic} selectedIndex={dropdownTopic}/> }
                {dropdownMaingoal === 2 && <SelectDropdown items={dropdownContent.portfolio} setSelectedIndex={setDropdownTopic} selectedIndex={dropdownTopic}/> }
                {dropdownMaingoal === 3 && <SelectDropdown items={dropdownContent.marketing} setSelectedIndex={setDropdownTopic} selectedIndex={dropdownTopic}/> }
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <div style={{height: '40px'}}/>
                <h1 style={style.header}>Personenbezogene Daten</h1>
                <p style={style.text}>Wir brauchen noch ein paar Daten um dich zu kontaktieren? * <br/>Deine Daten werden NICHT bei uns gespeichert!</p>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '7px'}}>
                    <p style={style.inputLabel}>Vor- und Zuname *</p>
                    <div style={{width: '85%', display: 'flex', justifyContent: 'center', gap: '7px'}}>
                        <input type={'text'}
                               style={{
                                   ...style.input,
                                   border: inputTarget === 'vorname' ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9'
                               }}
                               placeholder={'Vorname'}
                               onFocus={() => setInputTarget('vorname')}
                               onBlur={() => setInputTarget('')}
                               onChange={(event) => setVorname(event.target.value)}
                        />
                        <input type={'text'}
                               style={{
                                   ...style.input,
                                   border: inputTarget === 'nachname' ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9'
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
                               border: inputTarget === 'email' ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9'
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
                               border: inputTarget === 'vorwahl' ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9',
                               width: '15%',
                           }}
                           placeholder={'Vorwahl'}
                           onFocus={() => setInputTarget('vorwahl')}
                           onBlur={() => setInputTarget('')}
                           onChange={(event) => setVorwahl(event.target.value)}/>
                    <input type={'numeric'}
                           style={{
                               ...style.input,
                               border: inputTarget === 'rufnummer' ? '2px solid rgb(37,118,136)' : '2px solid #D9D9D9',
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
                <div style={{...style.sendButton, background: hover ? '#007AFF' : 'rgb(37,118,136)'}}
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