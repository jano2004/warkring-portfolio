export let serviceData = new Array(2);

const features = [
    {name: 'Benutzerfreundlichkeit', type: 'Basic'},
    {name: 'Schnelle Ladezeit', type: 'Basic'},
    {name: 'Sicherheit', type: 'Basic'},
    {name: 'SEO', type: 'Basic'},
    {name: 'Qualitätsinhalte', type: 'Basic'},
    {name: 'Kontaktinformationen', type: 'Basic'},
    {name: 'Social-Media Integration', type: 'Basic'},
    {name: 'Analyse und Feedback', type: 'Basic'},
    {name: 'Datenschutz und Rechtliches', type: 'Basic'},
    {name: 'Branding', type: 'Basic'},

    {name: 'Responsive Design', type: 'Standart'},
    {name: 'Call-to-Action', type: 'Standart'},
    {name: 'Visuelle Elemente', type: 'Standart'},
    {name: 'Hohe Inhaltsqualität', type: 'Standart'},

    {name: 'Kontakt-Automatisierung', type: 'Premium'},
    {name: 'Kauf-Automatisierung', type: 'Premium'}
];

const basicFeatures = features.filter(feature => feature.type === 'Basic');
const standartFeatures = features.filter(feature => feature.type === 'Basic'|| feature.type === 'Standart');
const premiumFeatures = features.filter(feature => feature.type === 'Basic' || feature.type === 'Standart' || feature.type === 'Premium');

serviceData[0] =  {packName: 'Basic', features: basicFeatures};
serviceData[1] = {packName: 'Standart', features: standartFeatures};
serviceData[2] = {packName: 'Premium', features: premiumFeatures};