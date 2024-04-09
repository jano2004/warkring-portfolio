import './Contact.css';
import Header from "../Main/Header/Header";
import React, {useState} from "react";
import Catalog from "../Catalog/Catalog";
import { importContactDataIntoDatabase } from '../../../Database/Contact-Service/ContactService';

function Contact({handleHomeClick, handleLoginClick}) {
    const [catalog, setCatalog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Allgemein');

    const handleOpenCatalog = () => {
        setCatalog(prevCatalog => !prevCatalog);
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const pushContactInformations = async (event) =>  {
        const contactSelect = selectedValue;
        const contactEmail = document.getElementById('contactEmail').value;
        const contactText = document.getElementById('contactText').value;
        const contactAffiliate = document.getElementById('contactAffiliate').value;

        if(contactEmail !== '' && contactText !== '') {
            try {
                await importContactDataIntoDatabase(contactSelect, contactEmail, contactText, contactAffiliate);
                alert('Wir haben deine Nachricht erhalten und melden uns in Kürze bei dir!');
            } catch (error) {
                console.error('Error pushing data to Database', error);
                alert('Error at pushing data to database, pleas try again later');
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div>
            <Header handleHomeClick={handleHomeClick} handleOpenCatalog={handleOpenCatalog} handleLoginClick={handleLoginClick}/>
            <div className={`main_catalog_section ${catalog ? 'shownCatalog' : 'hiddenCatalog'}`}>
                <Catalog/>
            </div>
            <section className='main_contact_section'>
                <label>Angebote auswählen:</label>
                <select name='services' value={selectedValue} onChange={handleChange}>
                    <option value='Allgemein'>Allgemein</option>
                    <option value='Basic'>Basic</option>
                    <option value='Advanced'>Advanced</option>
                    <option value='Premium'>Premium</option>
                    <option value='Baukasten'>Baukasten</option>
                </select>
                <p>* Pflicht</p>
                <input type='text' id='contactEmail' placeholder='* Ihre E-Mail'></input>
                <textarea id='contactText' placeholder='* Wünsche...'></textarea>
                <input type='text' id='contactAffiliate' placeholder='Ich kenne euch von [E-Mail]'></input>
                <button onClick={pushContactInformations} disabled={loading}>Kontaktieren</button>
            </section>
        </div>
    )
}

export default Contact;