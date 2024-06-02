import {colors} from "../../../../Services/ThemeService/Colors";
import { IoIosArrowBack } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Personal({fullName, setFullName, email, setEmail, phone, setPhone, others, setOthers, page, setPage, sendMail, error, setError}) {
    const handleBackChangeOfPage = () => {
        if (page <= 0) { return null; }
        else { setPage(page - 1); }
    }

    const style = {
        section: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        },
        input: {
            width: '415px',
            fontSize: '17px',
            height: '45px',
            paddingLeft: '10px',
            borderRadius: '15px',
            border: '1px solid ' + colors.selectableTileLightmode(true),
        },
        textArea: {
            width: '415px',
            fontSize: '17px',
            height: '170px',
            paddingLeft: '10px',
            paddingTop: '10px',
            borderRadius: '15px',
            border: '1px solid ' + colors.selectableTileLightmode(true),
            resize: 'none',
            fontFamily: '-apple-system'
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '55px',
            width: '415px',
            background: '',
            margin: '30px 0 0 0'
        },
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '55px',
            width: '150px',
            background: colors.selectableTileLightmode(true),
            color: colors.mainTextColor(false),
            borderRadius: '10px',
            border: '1px solid ' + colors.navItemUnselectedColor(true),
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.2s ease-in-out',
        }
    }

    return (
        <div style={style.section}>
            <input style={style.input} value={fullName} onChange={e => setFullName(e.target.value)}
                   placeholder={'Vor- und Nachname'}/>
            <input style={style.input} value={email} onChange={e => setEmail(e.target.value)}
                   placeholder={'E-Mail-Adresse'}/>
            {email.includes('@') && email.includes('.') ? null : email !== '' ? <p style={{
                    margin: '0 0 10px 0',
                    width: '95%',
                    color: 'red',
                    fontWeight: 250,
                    textAlign: 'center'}}>
                    E-Mail-Format nicht korrekt
                </p>
                : null}
            <input style={style.input} value={phone} onChange={e => setPhone(e.target.value)}
                   placeholder={'Telefonnummer'}/>
            <textarea style={style.textArea} value={others} onChange={e => setOthers(e.target.value)}
                      placeholder={'Was gibts noch zu sagen?'}/>
            <div style={style.buttonContainer}>
                <div style={{
                    ...style.button,
                    background: colors.selectableTileLightmode(false),
                    cursor: 'pointer',
                    width: '110px',
                    border: '1px solid ' + colors.navItemUnselectedColor(true)
                }}
                     onClick={handleBackChangeOfPage}>
                    <IoIosArrowBack/>
                    <p>Zurück</p>
                </div>
                <div style={{
                    ...style.button,
                    ...style.buttonText,
                    background: colors.selectableTileLightmode(email.includes('@') && email.includes('.') && email !== '' && fullName !== ''),
                    color: colors.mainTextColor(email.includes('@') && email.includes('.') && email !== '' && fullName !== ''),
                    cursor: 'pointer',
                    width: '140px'
                }}
                     onClick={sendMail}>
                    <p style={{marginRight: '5px'}}>Absenden</p>
                    <CiDeliveryTruck size={'30'}/>
                </div>
            </div>
            {error ?
                <p style={{
                    margin: '15px 0 0 0',
                    width: '95%',
                    color: colors.selectableTileLightmode(true),
                    fontWeight: 250,
                    textAlign: 'center',
                    fontSize: '1.1rem'}}>
                    Falls Ihr E-Mail-Service nicht geöffnet wurde,<br/>
                    ist die Nachricht in Ihre Zwischenablage kopiert wurden,<br/>
                    senden Sie mit diesem Text eine Mail an: <p1 style={{color: colors.mainTextColor(false)}}>kontakt@warkring.org</p1>
                </p>
                : null}
        </div>
    )
}