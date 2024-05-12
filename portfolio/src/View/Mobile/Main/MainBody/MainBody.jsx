import './MainBodyMobile.css';
import MainBodyImage from './MainBodyImage.png';
import CheckIcon from './haken-icons.png';
import {Link} from "react-router-dom";


const content = [
    {text: 'responsive design auf allen geräten'},
    {text: 'sichtbarkeit auf allen suchmaschinen'},
    {text: 'individuelle gestaltung'}
]

function ShowMainFeature({content}) {
    return (
        <div className='request_feature'>
            <img src= {CheckIcon} alt='checkPicture' />
            <p>{content}</p>
        </div>
    );
}


function MainBody({scrollToBottom}) {
    return (
        <section className='main_body_main_section'>
            <p>warkring.</p>
            <div className={'main_body_main_description_image'}>
                <div className={'main_body_main_description'}>
                    <p>
                        professionelle
                        <br></br>
                        <l>Webseiten</l> individuell
                        <br></br>für Ihr neues Unternehmen
                    </p>
                </div>
                <div className={'main_body_main_image'}>
                    <img src={MainBodyImage} alt={'mainImage'}/>
                </div>
            </div>
            <div className='main_body_main_request'>
                {content.map((feature, index) => (
                    <ShowMainFeature key= {index} content= {feature.text} />
                ))}
                <Link to={'/kontakt'}><button onClick={scrollToBottom}>Anfrage senden</button></Link>
            </div>
        </section>
    )
}

export default MainBody;