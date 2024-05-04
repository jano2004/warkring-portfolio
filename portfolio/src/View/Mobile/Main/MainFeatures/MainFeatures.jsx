import './MainFeaturesMobile.css';
//import featureIMG from './MainFeaturesImages/laptop_mobile.png';

function ShowFeatures({heading, description}) {
    return (
        <div className='main_features_container'>
            <h1 className={'main_features_header'}>{heading}</h1>
            <p className={'main_features_description'}>{description}</p>
        </div>
    );
}

const content = [
    {
        heading: 'Login / Registrierung einbindung',
        description: 'Die perfekte Platform für Ihre Kunden.'
    },
    {
        heading: 'Analyse-Tools',
        description: 'Bessere Einsicht in das Kundenverhalten, für optimiertes Marketing.'
    },
    {
        heading: 'Personalisierung',
        description: 'Wir erstellen Ihre Webseite genau nach Ihren Vorstellungen.'
    },
]

export default function MainFeatures() {
    return (
        <section className='main_features_section'>
            <p className={'main_service_top'}>features.</p>
            <div className={'main_features_container'}>
                {content.map((feature, index) => (
                    <ShowFeatures key={index} heading={feature.heading} description={feature.description}/>
                ))}
            </div>
            {/*<div className='main_features_image'>
                <img src={featureIMG} alt='macbook_mobile.png'/>
            </div>*/}
        </section>
    );
}