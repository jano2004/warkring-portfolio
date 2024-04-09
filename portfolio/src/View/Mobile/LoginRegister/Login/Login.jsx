import './Login.css';
import GoogleIcon from '../Images/GoogleIcon.png'
import AppleIcon from '../Images/AppleIcon.png';
import SpeacialHeader from "../SpeacialHeader/SpeacialHeader";
import { loginUser } from "../../../../Database/Login-Service/LoginService";

function Login({handleHomeClick, handleRegisterClick}) {

    const handleLoginClick = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if((username === '' || username === null) && (password === '' || password === null)) {
            return;
        }
        loginUser(username, password, handleHomeClick);
    }

    return (
        <section className='main_login_section'>
            <SpeacialHeader handleHomeClick={handleHomeClick}/>
            <div className='main_login_container'>
                <h1>Login</h1>
                <div className='main_login_input_button'>
                    <input className='main_login_input_username' id='username' placeholder='E-Mail | Nutzername'/>
                    <input className='main_login_input_passwort' id='password' type='password' placeholder='Passwort'/>
                    <button className='main_login_button' onClick={handleLoginClick}>EINLOGGEN</button>
                </div>
                <p>Noch keinen Account? <button className='main_login_register_button' onClick={handleRegisterClick}>Jetzt registrieren!</button></p>
                <p>Oder mit</p>
                <div className='main_login_options'>
                    <div className='main_login_options_google'>
                        <button><img src={GoogleIcon} alt=''/>Google</button>
                    </div>
                    <div className='main_login_options_apple'>
                        <button><img src={AppleIcon} alt=''/>Apple</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;