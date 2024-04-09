import './Services.css'
import Service from "./Service/Service";

function Services({handleMoreClick}) {
    const basicFeatures = {
        one: 'Benutzerfreundlich',
        two: 'Schnelle Ladezeit',
        three: 'Sicherheit',
        four: 'Responsive-Design',
        dot: '...'
    }

    const advancedFeaturs = {
        one: 'Call-To-Action',
        two: 'Kundenregistrierung',
        three: 'Erweiterte Sicherheit',
        four: 'Visuelle Elemente',
        dot: '...'
    }

    const premiumFeaturs = {
        one: 'Kontakt-Automatisierung',
        two: 'E-Commerce-Funktion.',
        three: 'Zahlungsmethoden',
        four: 'Website-Analyse und Tracking',
        dot: '...'
    }

    const baukastenFeaturs = {
        one: 'Benutzerfreundlich',
        two: 'Call-To-Action',
        three: 'Kontakt-Automatisierung',
        four: 'Website-Analyse und Tracking',
        dot: '...'
    }

    return (
        <section className='service_main_section'>
            <div className='service_top'>
                <Service header='Basic' listItems={basicFeatures} price='449,99' handleMoreClick={handleMoreClick} />
                <Service header='Advanced' listItems={advancedFeaturs} price='949,99' handleMoreClick={handleMoreClick} />
            </div>
            <div className='service_top'>
                <Service header='Premium' listItems={premiumFeaturs} price='1949,99' handleMoreClick={handleMoreClick} />
                <Service header='Baukasten' listItems={baukastenFeaturs} price='ab 399,99' handleMoreClick={handleMoreClick} />
            </div>
        </section>
    )
}

export default Services;