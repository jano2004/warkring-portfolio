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

const descriptionBasic = 'Für Unternehmen konzipiert, die einen einfachen, professionellen Online-Auftritt benötigen. Es bietet eine grundlegende Präsenz im Internet, die es Ihnen ermöglicht, ihre Markenidentität zu etablieren und potenzielle Kunden zu erreichen.';
const descriptionStandart = 'Für Unternehmen konzipiert, die einen einfachen, professionellen Online-Auftritt benötigen. Es bietet eine grundlegende Präsenz im Internet, die es Ihnen ermöglicht, ihre Markenidentität zu etablieren und potenzielle Kunden zu erreichen.';
const descriptionPremium = 'Für Unternehmen konzipiert, die einen einfachen, professionellen Online-Auftritt benötigen. Es bietet eine grundlegende Präsenz im Internet, die es Ihnen ermöglicht, ihre Markenidentität zu etablieren und potenzielle Kunden zu erreichen.';

serviceData[0] =  {packName: 'BASIC | MODERNE UNTERNEHMENS-WEBSITE', features: basicFeatures, price: '399,- €', description: descriptionBasic};
serviceData[1] = {packName: 'STANDART | MODERNE UNTERNEHMENS-WEBSITE', features: standartFeatures, price: '899,- €', description: descriptionStandart};
serviceData[2] = {packName: 'PREMIUM | AUTOMATISIERTE UNTERNEHMENS-WEBSITE', features: premiumFeatures, price: '1199,- €', description: descriptionPremium};