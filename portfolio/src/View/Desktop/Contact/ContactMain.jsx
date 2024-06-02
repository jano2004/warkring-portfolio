import {colors} from "../../../Services/ThemeService/Colors";
import Header from "../Header/Header";
import SelectOrganism from "./SelectOrganism/SelectOrganism";
import { selectPaket, selectMainTopic, selectTopic } from "./Content";
import {useState} from "react";
import Personal from "./Personal/Personal";

export default function ContactMain() {
    const [page, setPage] = useState(3);
    const [paket, setPaket] = useState('');
    const [mainTopic, setMainTopic] = useState('');
    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [others, setOthers] = useState('');

    const [error, setError] = useState(true)

    const handleSendMail = () => {
        if(email !== '' && fullName !== '') { console.log('send!' + email + fullName); sendMail() }
    }

    const sendMail = () => {
        const fullNameAndEmail = `${fullName} | ${email}`;
        const message = (
            'Liebes Genwa-Team, hiermit schicke ich Ihnen meine Daten und Präferenzen\n\n'
            + 'Hauptthema: ' + mainTopic + '\n'
            + 'Unterthema: ' + topic + '\n'
            + 'Voller Name: ' + fullName + '\n'
            + 'E-Mail: ' + email + '\n'
            + 'Telefonnummer: ' + phone + '\n'
            + 'Anderes: ' + others);
        window.location.href = `mailto:kontakt@warkring.org?subject=${encodeURIComponent(fullNameAndEmail)}&body=${encodeURIComponent(message)}`;
        navigator.clipboard.writeText(message)
            .then(() => {
                console.log('Text erfolgreich kopiert!');
            })
            .catch(err => {
                console.error('Fehler beim Kopieren des Textes: ', err);
            });
        setError(true);
    };

    const style = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: colors.mainBackgroundColor(false)
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        },
        contactContentContainer: {
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            width: '100%'
        }
    }
    return (
        <div style={style.main}>
            <Header />
            <div style={style.contentContainer}>
                <div style={style.contactContentContainer}>
                    {page === 0 ? <SelectOrganism props={selectPaket} select={paket} setSelect={setPaket} page={page} setPage={setPage} date={date} setDate={setDate}/> : null }
                    {page === 1 ? <SelectOrganism props={selectMainTopic} select={mainTopic} setSelect={setMainTopic} page={page} setPage={setPage} date={null} setDate={null}/> : null }
                    {page === 2 ? <SelectOrganism props={selectTopic(mainTopic)} select={topic} setSelect={setTopic} page={page} setPage={setPage}/> : null }
                    {page === 3
                        ? <Personal
                        fullName={fullName} setFullName={setFullName}
                        email={email} setEmail={setEmail}
                        phone={phone} setPhone={setPhone}
                        others={others} setOthers={setOthers}
                        page={page} setPage={setPage}
                        sendMail={handleSendMail}
                        error={error} setError={setError}/>
                        : null}
                </div>
            </div>
        </div>
    )
}

