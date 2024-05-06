import './MainContactCardFirstMobile.css';
import ContactButtonIconRight from '../CardIcons/ContactButtonIconRight.png';

export default function Main({setFormular, firstname, lastname, email, number, reachability, setFirstname, setLastname, setEmail, setNumber, setReachability}) {

    const handleFormularChange = () => {
        setFormular('second');
    }

    const handleFirstnameChange = (event) => setFirstname(event.target.value);
    const handleLastnameChange = (event) => setLastname(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleNumber = (event) => setNumber(event.target.value);
    const handleReachability = (event) => setReachability(event.target.value);

    return (
        <div className={'contact_card_first_container'}>
            <div className={'contact_card_first_inputs'}>
                <StarInput placeholder={'Vorname'}
                           header={'* Wie lautet Ihr Vorname?'}
                           value={firstname}
                           setValue={handleFirstnameChange}
                           tabIndex={1}/>
                <StarInput placeholder={'Nachname'}
                           header={'* Wie lautet Ihr Nachname?'}
                           value={lastname}
                           setValue={handleLastnameChange}
                           tabIndex={2}/>
                <StarInput placeholder={'E-Mail'}
                           header={'* Wie lautet Ihre E-Mail-Adresse?'}
                           value={email}
                           setValue={handleEmailChange}
                           tabIndex={3}/>
                <StarInput placeholder={'Telefonnummer'}
                           header={'Wie lautet Ihre Telefonnummer?'}
                           value={number}
                           setValue={handleNumber}
                           tabIndex={4}/>
                <StarInput placeholder={'Erreichbarkeit'}
                           header={'Wie sind Sie am besten zu erreichen?'}
                           value={reachability}
                           setValue={handleReachability}
                           tabIndex={5}/>
            </div>
            <div className={'contact_card_first_button'}>
                <button type="button" onClick={handleFormularChange}><img src={ContactButtonIconRight} alt={'data'}/></button>
            </div>
        </div>
    );
}

function StarInput({header, placeholder, value, setValue, tabIndex}) {
    return (
        <div className={'contact_input_and_header'}>
            {header ? <p className={'contact_input_header'}>{header}</p> : null}
            <input className={'contact_input'}
                   placeholder={placeholder}
                   value={value}
                   onChange={setValue}
                   tabIndex={tabIndex}
                   style={{fontSize: '17px'}}
            />
        </div>
    );
}
