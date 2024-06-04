const features = [
    {featureName: 'Benutzerfreundlichkeit', featureType: 'Standart'},
    {featureName: 'Schnelle Ladezeit', featureType: 'Standart'},
    {featureName: 'Sicherheit', featureType: 'Standart'},
    {featureName: 'Suchmaschinenoptimierung (SEO)', featureType: 'Standart'},
    {featureName: 'Responsive Design', featureType: 'Standart'},
    {featureName: 'Kontaktinformationen', featureType: 'Standart'},
    {featureName: 'Branding', featureType: 'Standart'},
    {featureName: 'Social-Media Integration', featureType: 'Standart'},
    {featureName: 'Datenschutz und Rechtliches', featureType: 'Standart'},

    {featureName: 'Call-to-Action', featureType: 'Advanced'},
    {featureName: 'Kundenregistrierung', featureType: 'Advanced'},
    {featureName: 'Visuelle Elemente', featureType: 'Advanced'},
    {featureName: 'Website-Analyse und -Tracking', featureType: 'Advanced'},
    {featureName: 'Ereignis- und Buchungssysteme', featureType: 'Advanced'},
    {featureName: 'Erweiterte Sicherheitsfunktionen', featureType: 'Advanced'},

    {featureName: 'Kontakt-Automatisierung', featureType: 'Premium'},
    {featureName: 'E-Commerce Funktionalität', featureType: 'Premium'},
    {featureName: 'Zahlungsmethoden', featureType: 'Premium'}
];


export const StandartFeatures = features.filter(feature => feature.featureType === 'Standart');
const advancedFeatures = features.filter(feature => feature.featureType === 'Advanced');
const premiumFeatures = features.filter(feature => feature.featureType === 'Premium');

export const servicesData = new Array(3);

servicesData[0] =  { 
    serviceName: 'Standart',
    serviceFeatures: StandartFeatures};
servicesData[1] = {  
    serviceName: "Advanced",
    serviceFeatures: advancedFeatures};
servicesData[2] = {  
    serviceName: 'Premium',
    serviceFeatures: premiumFeatures};