import './MainContactCardSecondMobile.css';
import ContactButtonIconRight from "../CardIcons/ContactButtonIconRight.png";

export default function Main({setFormular, kind, pages, preference, pricing, setKind, setPages, setPreference, setPricing, handleSend, errorHandler}) {
    const kindValues = [
        'Informationsseite', 'Unternehmensseite', 'Portfolio-Websites', 'Bildungsplattformen', 'Forum', 'Blog',
    ]
    const preferenceValues = [
        'Keine', 'Framework (React, Spring)', 'Wordpress', 'HTML-CSS'
    ]
    const pagesValues = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
    ]
    const handleFormularChange = () => {
        setFormular('first');
    }

    const handleKindInput = (event) => setKind(event.target.value);
    const handlePagesInput = (event) => setPages(event.target.value);
    const handlePreference = (event) => setPreference(event.target.value);
    const handlePricingInput = (event) => setPricing(event.target.value);

    const handleSendData = () => {
        handleSend();
    }

    return (
        <div className={'contact_card_second_container'}>
            <div className={'contact_card_second_inputs'}>
                <DropdownInput header={'* Was ist die Art der Webseite?'}
                               values={kindValues}
                               setValue={handleKindInput}/>
                <DropdownInput header={'* Wie viele Seiten soll die Website haben?'}
                               values={pagesValues}
                               setValue={handlePagesInput}/>
                <DropdownInput header={'Haben sie Kodierungs-Präferenzen?'}
                               values={preferenceValues}
                               setValue={handlePreference}/>
                <StarInput placeholder={'In Euro €'}
                           header={'* Was ist Ihre preisliche Vorstellung?'}
                           value={pricing}
                           setValue={handlePricingInput}/>
            </div>
            {errorHandler ? <p className={'contact_card_error_handler'}>Nicht alle mit * markierten Felder <br></br>sind ausgefüllt!</p> : null}
            <div className={'contact_card_second_button'}>
                <button type="button" className={'contact_card_second_back_button'} onClick={handleFormularChange}><img src={ContactButtonIconRight} alt={'data'}/></button>
                <button type='button' className={'contact_card_second_send_button'} onClick={handleSendData}>Absenden</button>
            </div>
        </div>
    )
}

function StarInput({header, placeholder, value, setValue}) {
    return (
        <div className={'contact_input_and_header'}>
            {header ? <p className={'contact_input_header'}>{header}</p> : null}
            <input className={'contact_input'} placeholder={placeholder} value={value} onChange={setValue} style={{fontSize: '17px'}}/>
        </div>
    );
}

function DropdownInput({header, values, setValue}) {
    return (
        <div className={'contact_input_and_header'}>
            <p className={'contact_input_header'}>{header}</p>
            <select onChange={setValue}>
                {values.map((value, index)=>(
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}