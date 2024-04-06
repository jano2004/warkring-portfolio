import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import './Main.css';
import ImageWithText from "./ImageWithText/ImageWithText";
import Cards from "./Cards/Cards";
import Services from "./Service/Services";
import Footer from "./Footer/Footer";

function MobileMain({onMoreClick, onHomeClick}) {
    return (
        <div>
            <Header onHomeClick={onHomeClick}/>
            <MainBody />
            <ImageWithText header={'PROFESSIONELLE WEBSEITEN FÜR FAIRE PREISE'} text={'Unser Team kreiert maßgeschneiderte Webseiten zu <br> fairen Preisen, perfekt abgestimmt auf Ihre <br>individuellen Bedürfnisse und Ziele.'}/>
            <Cards />
            <ImageWithText header={'WAS BIETEN WIR AN?'} text={'Wir bieten eine Vielfalt von Website-Services an, um genau das richtige Angebot für dich zu haben!'}/>
            <Services onMoreClick={onMoreClick}/>
            <Footer />
        </div>
    )
}

export default MobileMain;