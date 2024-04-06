import './Services.css'
import Service from "./Service/Service";
import SandboxService from "./Service/SandboxService";
import ImageWithText from "../../Main/ImageWithText/ImageWithText";

function Services() {
    const basicFeatures = {
        bfh: 'Benutzerfreundlich',
        slz: 'Schnelle Ladezeit',
        sec: 'Sicherheit',
        rsd: 'Responsive-Design',
        seo: 'Suchmachinenoptimierung',
        cfn: 'Kontaktinformationen',
        brd: 'Brading',
        slm: 'Social-Media Anbindung',
        dur: 'Datenschutz und Rechtliches'
    }

    const advancedFeaturs = {
        bfh: 'Benutzerfreundlich',
        slz: 'Schnelle Ladezeit',
        sec: 'Erweiterte Sicherheit',
        rsd: 'Responsive-Design',
        seo: 'Suchmachinenoptimierung',
        cfn: 'Kontaktinformationen',
        brd: 'Brading',
        slm: 'Social-Media Anbindung',
        dur: 'Datenschutz und Rechtliches',
        cta: 'Call-To-Action',
        rul: 'Kudenregistrierung',
        vse: 'Visuelle Elemente',
        wat: 'Website-Analyse und Tracking',
        eub: 'Ereignis- und Buchungssysteme',
    }

    const premiumFeaturs = {
        bfh: 'Benutzerfreundlich',
        slz: 'Schnelle Ladezeit',
        sec: 'Erweiterte Sicherheit',
        rsd: 'Responsive-Design',
        seo: 'Suchmachinenoptimierung',
        cfn: 'Kontaktinformationen',
        brd: 'Brading',
        slm: 'Social-Media Anbindung',
        dur: 'Datenschutz und Rechtliches',
        cta: 'Call-To-Action',
        rul: 'Kudenregistrierung',
        vse: 'Visuelle Elemente',
        wat: 'Website-Analyse und Tracking',
        eub: 'Ereignis- und Buchungssysteme',
        kas: 'Kontakt-Automatisierung',
        eaf: 'E-Commerce-Funktionalität',
        zmn: 'Zahlungsmethoden'
    }

    const baukastenFeaturs = {
        gbs: 'Grundbaustein',
        bfh: 'Benutzerfreundlich',
        slz: 'Schnelle Ladezeit',
        sec: 'Erweiterte Sicherheit',
        rsd: 'Responsive-Design',
        seo: 'Suchmachinenoptimierung',
        cfn: 'Kontaktinformationen',
        brd: 'Brading',
        slm: 'Social-Media Anbindung',
        dur: 'Datenschutz und Rechtliches',
        cta: 'Call-To-Action',
        rul: 'Kudenregistrierung',
        vse: 'Visuelle Elemente',
        wat: 'Website-Analyse und Tracking',
        eub: 'Ereignis- und Buchungssysteme',
        kas: 'Kontakt-Automatisierung',
        eaf: 'E-Commerce-Funktionalität',
        zmn: 'Zahlungsmethoden'
    }

    return (
        <section className='service_main_section'>
            <ImageWithText header={'WAS BIETEN WIR AN?'} text={'Wir bieten eine Vielfalt von Website-Services an, um genau das richtige Angebot für dich zu haben!<br><br><br>'}/>
            <div className='service_top'>
                <Service header='Basic' listItems={basicFeatures} price='449,99'/>
                <Service header='Advanced' listItems={advancedFeaturs} price='949,99'/>
            </div>
            <div className='service_top'>
                <Service header='Premium' listItems={premiumFeaturs} price='1949,99'/>
                <SandboxService header='Baukasten' listItems={baukastenFeaturs} price='ab 399,99'/>
            </div>
        </section>
    )
}

export default Services;