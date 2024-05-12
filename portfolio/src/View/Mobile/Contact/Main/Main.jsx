import React, {useState, useEffect} from "react";
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import RadioSelectWithHeaderFooterLine from "../Content/Organism/RadioSelectWithHeaderFooterline";
import ContactTextInputs from "../Content/Organism/ContactTextInputs";
import Footer from "../../Footer/Footer";
import { sendMail } from '../MailService/ContactMailService'

export default function MainContact() {
   const [selectedHauptziel, setSelectedHauptziel] = useState('');
   const [selectedInformation, setSelectedInformation] = useState('');
   const [selectedPlaceholder, setSelectedPlaceholder] = useState('');
   const [selectedErfolg, setSelectedErfolg] = useState('');
   const [inputFullName, setInputFullName] = useState('');
   const [inputEmail, setInputEmail] = useState('');
   const [inputTelefon, setInputTelefon] = useState('')
   const [menu, setMenu] = useState(false);

   const handleMenuMobileClick = () => {
      setMenu(!menu);
   }

   const scrollToNextComponent = (where) => {
      const element = document.getElementById(where);
      if (element) {
         console.log(where)
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
         console.error("Element not found: " + where);
      }
   }

   useEffect(() => {
      scrollToNextComponent('top');
   }, []);

   const contentHauptziel = [
      { props: 'Informations-\nbereitstellung', id: 'info', state: selectedHauptziel === 'info', position: 'first'},
      { props: 'Bildung und\nTraining', id: 'bildung', state: selectedHauptziel === 'bildung', position: 'first'},
      { props: 'Portfolio /\nPräsentation', id: 'portfolio', state: selectedHauptziel === 'portfolio', position: 'first'},
      { props: 'Marketing /\nWerbung', id: 'marketing', state: selectedHauptziel === 'marketing', position: 'first'},
   ];

   const contentErfolg = [
      { props: 'Traffic /\nZugriffszahlen', id: 'traffic', state: selectedErfolg === 'traffic', position: 'third'},
      { props: 'Verkaufszahlen', id: 'verkauf', state: selectedErfolg === 'verkauf', position: 'third' },
      { props: 'Anzahl der Leads \nKontaktanfragen', id: 'leads', state: selectedErfolg === 'leads', position: 'third' },
      { props: 'Kundenfeedback\nund -bewertung', id: 'feedback', state: selectedErfolg === 'feedback', position: 'third' },
      { props: 'Conversion Rate', id: 'conversion', state: selectedErfolg === 'conversion', position: 'third' },
      { props: 'Sonstiges...', id: 'sonstiges', state: selectedErfolg === 'sonstiges', position: 'third' }
   ]

   const contentDaten = [
      { placeholder: 'Vor- und Zuname', value: inputFullName, setValue: setInputFullName},
      { placeholder: 'E-Mail-Adresse', value: inputEmail, setValue: setInputEmail},
      { placeholder: 'Telefonnummer', value: inputTelefon, setValue: setInputTelefon}
   ]

   const styleContainer = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden'
   }

   const styleSubmitButton = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40px',
      width: '150px',
      fontSize: '1rem',
      color: '#171717',
      borderRadius: '7px',
      margin: '20px 0 0 0'
   }

   const handleSendMail = () => {
      sendMail(inputFullName, inputEmail, inputTelefon, selectedHauptziel, selectedInformation, selectedErfolg);
   }

   return (
       <div style={styleContainer} id={'top'}>
          <Header handleMenuMobileClick={handleMenuMobileClick}/>
          <div className={'mobileMenu'}>
            {menu && <Menu currentSelected={'kontakt'}/>}
          </div>
          <RadioSelectWithHeaderFooterLine id={'first'}
                                           header={'Hauptziel / Zweck der Website?'}
                                           content={contentHauptziel}
                                           selected={selectedHauptziel}
                                           setSelected={setSelectedHauptziel}
                                           scrollToNextComponent={scrollToNextComponent}/>
          <RadioSelectForHauptziel id={'second'}
                                   selectedHauptziel={selectedHauptziel}
                                   selectedInformation={selectedInformation} selectedPlaceholder={selectedPlaceholder}
                                   setSelectedInformation={setSelectedInformation} setSelectedPlaceholder={setSelectedPlaceholder}
                                   scrollToNextComponent={scrollToNextComponent}/>
          <RadioSelectWithHeaderFooterLine id={'third'}
                                           header={'Wie messen Sie den Erfolg Ihrer Website?'}
                                           content={contentErfolg}
                                           selected={selectedErfolg}
                                           setSelected={setSelectedErfolg}
                                           scrollToNextComponent={scrollToNextComponent}/>
          <ContactTextInputs id={'fourth'} header={'Persönliche Daten'} props={contentDaten}/>
          <button style={styleSubmitButton} onClick={handleSendMail}>Absenden</button>
          <div style={{height: '40px'}}></div>
          <Footer />
       </div>
   )
}

function RadioSelectForHauptziel({id, selectedHauptziel, selectedInformation, setSelectedInformation, selectedPlaceholder, setSelectedPlaceholder, scrollToNextComponent}) {

   const contentInformation = [
      { props: 'Über mich selber', id: 'selber', state: selectedInformation === 'selber', position: 'second'},
      { props: 'Über mein\nUnternehmen', id: 'unternehmen', state: selectedInformation === 'unternehmen', position: 'second'},
      { props: 'Informations-\nverbreitung', id: 'verbreitung', state: selectedInformation === 'verbreitung', position: 'second'},
      { props: 'Sonstiges...', id: 'sonstiges', state: selectedInformation === 'sonstiges', position: 'second'},
   ]

   const contentPlaceholder = [
      { props: '', id: 'first', state: selectedInformation === 'first', position: 'second'},
      { props: '', id: 'second', state: selectedInformation === 'second', position: 'second'},
      { props: '', id: 'third', state: selectedInformation === 'third', position: 'second'},
      { props: '', id: 'fourth', state: selectedInformation === 'fourth', position: 'second'},
   ]

   return (
       <div>
          {selectedHauptziel === 'info' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                           header={'Infortmations-Bereitstellung'}
                                                                           content={contentInformation}
                                                                           selected={selectedInformation}
                                                                           setSelected={setSelectedInformation}
                                                                           scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'bildung' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                             header={'Bildung und Training'}
                                                                             content={contentPlaceholder}
                                                                             selected={selectedPlaceholder}
                                                                             setSelected={setSelectedPlaceholder}
                                                                             scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'portfolio' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                               header={'Portfolio / Präsentation'}
                                                                               content={contentPlaceholder}
                                                                               selected={selectedPlaceholder}
                                                                               setSelected={setSelectedPlaceholder}
                                                                               scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'marketing' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                               header={'Marketing / Werbung'}
                                                                               content={contentPlaceholder}
                                                                               selected={selectedPlaceholder}
                                                                               setSelected={setSelectedPlaceholder}
                                                                               scrollToNextComponent={scrollToNextComponent}/> : null}
       </div>
   )
}