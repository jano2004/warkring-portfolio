import './Login.css';
import GoogleIcon from '../Images/GoogleIcon.png'
import AppleIcon from '../Images/AppleIcon.png';

function Login() {
    return (
        <section className='main_login_section'>
            <div className='main_login_container'>
                <h1>Login</h1>
                <div className='main_login_input_button'>
                    <input className='main_login_input_username' placeholder='E-Mail | Nutzername'/>
                    <input className='main_login_input_passwort' placeholder='Passwort'/>
                    <button className='main_login_button'>EINLOGGEN</button>
                </div>
                <p>Noch keinen Account? <a>Jetzt registrieren!</a></p>
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