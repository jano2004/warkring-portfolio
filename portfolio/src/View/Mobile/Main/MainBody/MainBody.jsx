import './MainBodyMobile.css';
import MainBodyImage from './MainBodyImage.png';

function MainBody() {
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
        </section>
    )
}

export default MainBody;