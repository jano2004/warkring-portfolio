import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import './Main.css';
import ImageWithText from "./ImageWithText/ImageWithText";
import ResponsiveDesignImage from "./Images/ResponsiveDesignImage.png";
import Cards from "./Cards/Cards";

function MobileMain() {
    return (
        <div>
            <Header />
            <MainBody />
            <ImageWithText header={'PROFESSIONELLE WEBSEITEN FÜR FAIRE PREISE'} text={'Unser Team kreiert maßgeschneiderte Webseiten zu <br> fairen Preisen, perfekt abgestimmt auf Ihre <br>individuellen Bedürfnisse und Ziele.'}/>
            <Cards />
            <ImageWithText header={'RESPONSIVE DESIGN'} text={'Auf deiner Webseite muss sich jeder Kunde wohlfühlen!<br> Egal ob Smartphone, Tablet oder Desktop-PC.<br>Unser Team legt großen Wert darauf, jeder dieser<br> Zielgruppen, die beste Erfahrung auf Ihrer <br> eigenen Website zu geben.'} img={ResponsiveDesignImage}/>
            <ImageWithText />
            <ImageWithText />
        </div>
    )
}

export default MobileMain;