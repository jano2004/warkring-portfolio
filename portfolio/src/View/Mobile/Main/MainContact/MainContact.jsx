import './MainContactMobile.css';
import { useState} from "react";

export default function MainContact() {
    return (
        <section className={'main_contact_section'}>
            <p className={'main_service_top'}>kontakt.</p>
            <Formular />
        </section>
    )
}

function Formular() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const contactMail = 'kontakt@warkring.org';

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendData = () => {
        console.log('Vor - und Zuname:', fullName, ' | E-Mail:', email, ' | Nachricht:', message);
        const fullNameAndEmail = fullName + ' | ' + email;
        window.location.href = `mailto:${contactMail}?subject=${fullNameAndEmail}&body=${message}`;
    };



    return (
        <div className={'main_formular_container'}>
            <input className={'main_formular_input_standard'}
                   placeholder={'Vor - und Zuname'}
                   value={fullName}
                   onChange={handleFullNameChange}/>
            <input className={'main_formular_input_standard'}
                   placeholder={'E-Mail'}
                   value={email}
                   onChange={handleEmailChange}/>
            <textarea className={'main_formular_input_message'}
                      placeholder={'Ihre Nachricht an uns...'}
                      value={message}
                      onChange={handleMessageChange}/>
            <button className={'main_formular_submit'} onClick={sendData}><u>Absenden</u></button>
        </div>
    )
}

