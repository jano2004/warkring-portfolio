import './MainContactMobile.css';
export default function MainContact() {
    return (
        <section className={'main_contact_section'}>
            <p className={'main_service_top'}>kontakt.</p>
            <Formular />
        </section>
    )
}

function Formular() {
    return (
        <div className={'main_formular_container'}>
            <input className={'main_formular_input_standard'} placeholder={'Vor - und Zuname'}/>
            <input className={'main_formular_input_standard'} placeholder={'E-Mail'}/>
            <textarea className={'main_formular_input_message'} placeholder={'Ihre Nachricht an uns...'}/>
            <button className={'main_formular_submit'}><u>Absenden</u></button>
        </div>
    )
}