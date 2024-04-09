import './Register.css';
import GoogleIcon from '../Images/GoogleIcon.png'
import AppleIcon from '../Images/AppleIcon.png';
import SpeacialHeader from "../SpeacialHeader/SpeacialHeader";
import { } from '../../../../Database/Registration-Service/RegistrationService';

function MobileRegister({handleHomeClick, handleLoginClick}) {


    const handleRegisterClick = () => {
        /*
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const secondPassword = document.getElementById('secondPassword').value;
        */
    }


    return (
        <section className='main_Register_section'>
            <SpeacialHeader handleHomeClick={handleHomeClick}/>
            <div className='main_Register_container'>
                <h1>Register</h1>
                <div className='main_Register_input_button'>
                    <input className='main_Register_input_email' id='email' placeholder='E-Mail'/>
                    <input className='main_Register_input_username' id='username' placeholder='Nutzername'/>
                    <input className='main_Register_input_passwort' id='password' type='password' placeholder='Passwort'/>
                    <input className='main_Register_input_passwort' id='password' type='secondPassword' placeholder='Passwort wiederholen'/>
                    <button className='main_Register_button' onClick={handleRegisterClick}>REGISTRIEREN</button>
                </div>
                <p>Ich habe einen Account. <button className='main_login_login_button' onClick={handleLoginClick}>Jetzt einloggen!</button></p>
                <p>Oder mit</p>
                <div className='main_Register_options'>
                    <div className='main_Register_options_google'>
                        <button><img src={GoogleIcon} alt=''/>Google</button>
                    </div>
                    <div className='main_Register_options_apple'>
                        <button><img src={AppleIcon} alt=''/>Apple</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileRegister;