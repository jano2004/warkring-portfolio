const features = [
    {featureName: 'Benutzerfreundlichkeit', featureType: 'Standard'},
    {featureName: 'Schnelle Ladezeit', featureType: 'Standard'},
    {featureName: 'Sicherheit', featureType: 'Standard'},
    {featureName: 'Suchmaschinenoptimierung (SEO)', featureType: 'Standard'},
    {featureName: 'Responsive Design', featureType: 'Standard'},
    {featureName: 'Kontaktinformationen', featureType: 'Standard'},
    {featureName: 'Branding', featureType: 'Standard'},
    {featureName: 'Social-Media Integration', featureType: 'Standard'},
    {featureName: 'Datenschutz und Rechtliches', featureType: 'Standard'},

    {featureName: 'Call-to-Action', featureType: 'Erweitert'},
    {featureName: 'Kundenregistrierung', featureType: 'Erweitert'},
    {featureName: 'Visuelle Elemente', featureType: 'Erweitert'},
    {featureName: 'Website-Analyse und -Tracking', featureType: 'Erweitert'},
    {featureName: 'Ereignis- und Buchungssysteme', featureType: 'Erweitert'},
    {featureName: 'Erweiterte Sicherheitsfunktionen', featureType: 'Erweitert'},

    {featureName: 'Kontakt-Automatisierung', featureType: 'Premium'},
    {featureName: 'E-Commerce Funktionalität', featureType: 'Premium'},
    {featureName: 'Zahlungsmethoden', featureType: 'Premium'}
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