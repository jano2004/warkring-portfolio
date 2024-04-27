import "./Desktop_ServicesMain.css";
import iphoneIMG from '../../Services_Images/iphone.png';

function ServicesMain() {
    return(
        <div className="desktop_main_container">
            <div className="desktop_main_content">
                <div className="desktop_main_header">
                    <h1>Unser Angebot für Sie</h1>
                </div>
                <div className="desktop_main_pic-and-text">
                    <div className="desktop_main_pic-and-text_iphone">
                        <img src={iphoneIMG} alt="Iphone Video" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesMain;