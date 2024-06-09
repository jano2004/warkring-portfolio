import { FaHandshake } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { TbDeviceMobileCode } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import { BsDatabaseFillLock } from "react-icons/bs";
import { MdCallToAction } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { TfiLayoutMediaRight } from "react-icons/tfi";
import { MdAnalytics } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";


const features = [
    {   
        featureName: 'Benutzerfreundlichkeit', 
        featureIcon: <FaHandshake size={'40px'}/>,
        featureText: 'Intuitive Oberflächen für eine optimale Nutzererfahrung.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Schnelle Ladezeiten', 
        featureIcon: <IoCloudDownloadSharp size={'35px'}/>,
        featureText: 'Lazy Loading und Bildkomprimierung für schnelle Seiten.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Sicherheit der Webseite', 
        featureIcon: <MdOutlineSecurity size={'35px'}/>,
        featureText: 'SSL und Sicherheitsupdates schützen Ihre Webseite.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Sichtbarkeit (SEO)', 
        featureIcon: <IoMdSearch size={'35px'}/>, 
        featureText: 'Verbesserte SEO für mehr organischen Traffic.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Responsive Design', 
        featureIcon: <TbDeviceMobileCode size={'35px'}/>, 
        featureText: 'Optimale Darstellung auf allen Geräten.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Kontaktinformationen', 
        featureIcon: <GrContact size={'30px'}/>, 
        featureText: 'Leicht zugängliche Kontaktmöglichkeiten.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Branding und Vertrieb', 
        featureIcon: <GiReceiveMoney size={'35px'}/>, 
        featureText: 'Stärkung Ihrer Marke durch konsistentes Design.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Social-Media Integration', 
        featureIcon: <IoShareSocial size={'35px'}/>, 
        featureText: 'Einbindung von Social-Media-Links und Feeds.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Datenschutz und Rechtliches', 
        featureIcon: <BsDatabaseFillLock size={'35px'}/>, 
        featureText: 'Einhaltung aktueller Datenschutzrichtlinien.',
        featureType: 'Standard',
    },
    {   
        featureName: 'Call-to-Action Elemente', 
        featureIcon: <MdCallToAction size={'35px'}/>, 
        featureText: 'Auffällige CTAs zur Nutzeraktivierung.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Kundenregistrierung', 
        featureIcon: <IoMdContact size={'35px'}/>, 
        featureText: 'Einfache Anmelde- und Verwaltungssysteme.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Visuelle Elemente', 
        featureIcon: <TfiLayoutMediaRight size={'40px'}/>, 
        featureText: 'Attraktive Bilder und Videos.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Analyse und Tracking', 
        featureIcon: <MdAnalytics size={'35px'}/>, 
        featureText: 'Tools zur Nutzerverhaltensanalyse.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Ereignis- und Buchungssysteme', 
        featureIcon: <FaCalendarDay size={'32px'}/>, 
        featureText: 'Verwaltung von Terminen und Events.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Erweiterte Sicherheitsfunktionen', 
        featureIcon: <MdSystemSecurityUpdateGood size={'35px'}/>, 
        featureText: 'Zwei-Faktor-Authentifizierung und mehr.',
        featureType: 'Erweitert',
    },
    {   
        featureName: 'Kontakt-Automatisierung', 
        featureIcon: <IoSettingsSharp size={'30px'}/>, 
        featureText: 'Automatisierte Kontaktaufnahme und Nachverfolgung.',
        featureType: 'Premium',
    },
    {   
        featureName: 'E-Commerce Funktionalität', 
        featureIcon: <FaShoppingCart size={'30px'}/>, 
        featureText: 'Umfangreiche E-Commerce-Funktionen.',
        featureType: 'Premium',
    },
    {   
        featureName: 'Zahlungsmethoden', 
        featureIcon: <MdOutlinePayment size={'35px'}/>, 
        featureText: 'Sichere und vielseitige Zahlungsmethoden.',
        featureType: 'Premium',
    },
];


export const StandardFeatures = features.filter(feature => feature.featureType === 'Standard');
const ErweitertFeatures = features.filter(feature => feature.featureType === 'Erweitert');
const premiumFeatures = features.filter(feature => feature.featureType === 'Premium');

export const servicesData = new Array(3);

servicesData[0] =  { 
    serviceName: 'Standard',
    serviceFeatures: StandardFeatures};
servicesData[1] = {  
    serviceName: "Erweitert",
    serviceFeatures: ErweitertFeatures};
servicesData[2] = {  
    serviceName: 'Premium',
    serviceFeatures: premiumFeatures};