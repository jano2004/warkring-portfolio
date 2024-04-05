import './Cards.css';
import APICCard from '../Images/APICard.png';
import CookieCard from '../Images/CookiesCard.png';
import LoginCard from '../Images/LoginCard.png';
import FrameworkCard from '../Images/FrameworkCard.png';


function Cards() {
    return (
        <section className='main'>
            <div className="top">
                <div className="card_container">
                    <div className="background_overlay">
                        <p>Wir binden deine <br></br>Wunschfunktionen <br></br>über <a href='https://de.wikipedia.org/wiki/Programmierschnittstelle'>API's</a> an!</p>
                    </div>
                    <img src={APICCard} alt=""/>
                </div>
                <div className="card_container">
                    <div className="background_overlay">
                        <p>Wir machen deine <br></br>Website sicherer mit<br></br><a href='https://de.wikipedia.org/wiki/HTTP-Cookie'>HTTP-Cookes</a>!</p>
                    </div>
                    <img src={CookieCard} alt=""/>
                </div>
            </div>
            <div className="top">
                <div className="card_container">
                    <div className="background_overlay">
                        <p>Wir lassen deine <br></br>Kunden sich einloggen<br></br><a href='https://de.wikipedia.org/wiki/HTTP-Cookie'>HTTP-Cookes</a>!</p>
                    </div>
                    <img src={LoginCard} alt=""/>
                </div>
                <div className="card_container">
                    <div className="background_overlay">
                        <p>Wir bauen deine <br></br>Website mit dem<br></br><a
                            href='https://de.wikipedia.org/wiki/React_Native'>REACT-Framework</a>!</p>
                    </div>
                    <img src={FrameworkCard} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Cards;