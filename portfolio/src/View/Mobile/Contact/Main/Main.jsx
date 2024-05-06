import './MainContactMobile.css';
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import CardFirst from '../CardFirst/Main';
import CardSecond from '../CardSecond/Main'
import React, {useState} from "react";
export default function Main() {
    const [menu, setMenu] = useState(false);
    const [formular, setFormular] = useState('first');

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [reachability, setReachability] = useState('')

    const [kind, setKind] = useState('Informationsseite');
    const [pages, setPages] = useState('');
    const [preference, setPreference] = useState('Framework (React, Spring)');
    const [pricing, setPricing] = useState('');

    const handleMenuMobileClick = () => {
        setMenu(!menu);
    };

    const [errorHandler, setErrorHandler] = useState(false)

    const sendData = () => {
        console.log("sendData wurde aufgerufen");
        console.log('Firstname:', firstname);
        console.log('Lastname:', lastname);
        console.log('E-Mail:', email);
        console.log('Number:', number);
        console.log('Reachability:', reachability);
        console.log('Kind:', kind);
        console.log('Pages:', pages);
        console.log('Preference:', preference);
        console.log('Pricing:', pricing);
        sendMail();
    };

    const createMessage = () => {
        return `Hallo, Warkring-Team, \n\nich bin auf der Suche nach einer ${kind}-Webseite.` +
            `${pages ? ` \nDie Webseite soll ungefähr ${pages} Seiten enthalten.` : ''}` +
            `${reachability ? ` \nSie können mich am besten über ${reachability} erreichen.` : ''}` +
            `${number ? ` \nMeine Telefonnummer lautet: ${number}.` : ''}` +
            `${preference !== 'Keine' ? ` \nMeine Präferenz der Kodierung ist ${preference}.` : ' Ich habe keine Code-Präferenzen.'}` +
            `${pricing ? `\nMeine Preisvorstellung liegt bei ${pricing}€.` : ''}` +
            `\n\nMit freundlichen Grüßen,\n${firstname} ${lastname}`;
    };

    const sendMail = () => {
        if(firstname !== null && firstname !== '' &&
            lastname !== null && lastname !== '' &&
            email !== null && email !== '' &&
            pages !== null && pages !== '' &&
            pricing !== null && pricing !== '') {
            const fullNameAndEmail = `${firstname} ${lastname} | ${email}`;
            const message = createMessage();  // Ruf die Funktion createMessage auf, um den aktualisierten Nachrichteninhalt zu erhalten
            window.location.href = `mailto:kontakt@warkring.org?subject=${encodeURIComponent(fullNameAndEmail)}&body=${encodeURIComponent(message)}`;
        } else {
            setErrorHandler(true);
        }
    };

    return (
        <div className='ContactMobileBody' onClick={menu ? handleMenuMobileClick : null}>
            <Header handleMenuMobileClick={handleMenuMobileClick}/>
            <div className={'mobileMenu'}>
                {menu && <Menu currentSelected={'kontakt'}/>}
            </div>
            <ContactBody />
            {formular === 'first' ?
                <CardFirst setFormular={setFormular}
                           firstname={firstname} setFirstname={setFirstname}
                           lastname={lastname} setLastname={setLastname}
                           email={email} setEmail={setEmail}
                           number={number} setNumber={setNumber}
                           reachability={reachability} setReachability={setReachability}/> :
                <CardSecond setFormular={setFormular}
                            handleSend={sendData}
                            kind={kind} setKind={setKind}
                            pages={pages} setPages={setPages}
                            preference={preference} setPreference={setPreference}
                            pricing={pricing} setPricing={setPricing}
                            errorHandler={errorHandler}/>}
        </div>
    )
}

function ContactBody() {
    return (
        <h1 className={'service_body_text'}>kontakt.</h1>
    )
}