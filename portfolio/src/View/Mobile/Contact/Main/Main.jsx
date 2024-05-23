import React, {useState, useEffect} from "react";
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import RadioSelectWithHeaderFooterLine from "../Content/Organism/RadioSelectWithHeaderFooterline";
import ContactTextInputs from "../Content/Organism/ContactTextInputs";
import Footer from "../../Footer/Footer";
import { sendMail } from '../MailService/ContactMailService'
import {colors} from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";

export default function MainContact() {
   const [selectedHauptziel, setSelectedHauptziel] = useState('');
   const [selectedHauptzielSecond, setSelectedHauptzielSecond] = useState('');
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
      { props: 'Traffic / Zugriffszahlen', id: 'traffic', state: selectedErfolg === 'traffic', position: 'third'},
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

   const [isDarkMode] = useDarkMode();

   const styleContainer = {
      background: colors.mainBackgroundColor(isDarkMode),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden'
   }

   const styleSubmitButton = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      marginTop: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      fontWeight: 300,
      color: colors.mainTextColor(!isDarkMode),
      backgroundColor: colors.buttonColor(isDarkMode),
      padding: '5px 20px'
   }

   const mobileMenuStyle = {
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      transform: menu ? 'translateX(0)' : 'translateX(-100%)',
   };

   const handleSendMail = () => {
      sendMail(inputFullName, inputEmail, inputTelefon, selectedHauptziel, selectedHauptzielSecond, selectedErfolg);
   }

   return (
       <div style={styleContainer} id={'top'}>
          <Header handleMenuMobileClick={handleMenuMobileClick}/>
          <div className={'mobileMenu'} style={mobileMenuStyle}>
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
                                   selectedHauptzielSecond={selectedHauptzielSecond} selectedPlaceholder={selectedPlaceholder}
                                   setSelectedHauptzielSecond={setSelectedHauptzielSecond} setSelectedPlaceholder={setSelectedPlaceholder}
                                   scrollToNextComponent={scrollToNextComponent}/>
          <RadioSelectWithHeaderFooterLine id={'third'}
                                           header={'Wie möchten Sie den Erfolg Ihrer Website messen?'}
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

function RadioSelectForHauptziel({id, selectedHauptziel, selectedHauptzielSecond, setSelectedHauptzielSecond, selectedPlaceholder, setSelectedPlaceholder, scrollToNextComponent}) {

   const contentInformation = [
      { props: 'Über mich selbst', id: 'selbst', state: selectedHauptzielSecond === 'selbst', position: 'second'},
      { props: 'Über mein\nUnternehmen', id: 'unternehmen', state: selectedHauptzielSecond === 'unternehmen', position: 'second'},
      { props: 'Informations-\nverbreitung', id: 'verbreitung', state: selectedHauptzielSecond === 'verbreitung', position: 'second'},
      { props: 'Sonstiges...', id: 'sonstigesInformation', state: selectedHauptzielSecond === 'sonstigesInformation', position: 'second'},
   ]

   const contentBildung = [
      { props: 'Weiterbildung spezifischer Themen', id: 'weiterbildung', state: selectedHauptzielSecond === 'weiterbildung', position: 'second'},
      { props: 'Sportliche Übungen / Training', id: 'sportliches', state: selectedHauptzielSecond === 'sportliches', position: 'second'},
      { props: 'Motivation', id: 'motivation', state: selectedHauptzielSecond === 'motivation', position: 'second'},
      { props: 'Sonstiges...', id: 'sonstigesBildung', state: selectedHauptzielSecond === 'sonstigesBildung', position: 'second'},
   ]

   const contentPortfolio = [
      { props: 'Über mich selber', id: 'selbst', state: selectedHauptzielSecond === 'selbst', position: 'second'},
      { props: 'Über mein Unternehmen', id: 'unternehmen', state: selectedHauptzielSecond === 'unternehmen', position: 'second'},
      { props: 'Sonstiges...', id: 'sonstigesPortfolio', state: selectedHauptzielSecond === 'sonstigesPortfolio', position: 'second'},
   ]


   return (
       <div>
          {selectedHauptziel === 'info' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                           header={'Infortmations-Bereitstellung'}
                                                                           content={contentInformation}
                                                                           selected={selectedHauptzielSecond}
                                                                           setSelected={setSelectedHauptzielSecond}
                                                                           scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'bildung' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                             header={'Bildung und Training'}
                                                                             content={contentBildung}
                                                                             selected={selectedHauptzielSecond}
                                                                             setSelected={setSelectedHauptzielSecond}
                                                                             scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'portfolio' ? <RadioSelectWithHeaderFooterLine id={id}
                                                                               header={'Portfolio / Präsentation'}
                                                                               content={contentPortfolio}
                                                                               selected={selectedHauptzielSecond}
                                                                               setSelected={setSelectedHauptzielSecond}
                                                                               scrollToNextComponent={scrollToNextComponent}/> :
          selectedHauptziel === 'marketing' ? null : null}
       </div>
   )
}