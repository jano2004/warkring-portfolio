import './MainBody.css';
import MainBodyImage from '../Images/MainBodyImage.png';

function MainBody() {
    return (
        <div className="Main_Body">
            <div className="Main_Body_Text_Button">
                <div className="Main_Body_Text">
                    <h1>WARKRING</h1>
                    <p>Wir bringen dein Unternehmen
                        <br></br>auf ein neues Level mit unseren Websites</p>
                </div>
                <button className="Main_Body_Button">MEHR INFOS</button>
            </div>
            <div className="Main_Body_Image">
                <img src={MainBodyImage} alt={"mainBodyImage"}/>
            </div>
        </div>
    )
}

export default MainBody;