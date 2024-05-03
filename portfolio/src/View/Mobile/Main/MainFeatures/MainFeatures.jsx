import './MainFeaturesMobile.css';
import featureIMG from './MainFeaturesImages/laptop_mobile.png';

function ShowFeatures({heading, description}) {
    return (
        <div className='main_features_container'>
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    );
}

export default function MainFeatures() {
    return (
        <section className='main_features_section'>
            <ShowFeatures heading= 'login/ registrierung einbindung' description= 'Die perfekte Platform für Ihre Kunden.'/>
            <ShowFeatures heading= 'analyse-tools' description= 'Bessere Einsicht in das Kundenverhalten, für optimiertes Marketing.'/>
            <ShowFeatures heading= 'persönliches design' description= 'Wir erstellen Ihre Webseite genau nach Ihren Vorstellungen.'/>
            <div className='main_features_image'>
                <img src={featureIMG} alt='macbook_mobile.png' />
            </div>
        </section>
    );
}