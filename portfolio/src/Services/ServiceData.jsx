export let serviceData = new Array(2);

const features = [
    {featureName: 'Benutzerfreundlichkeit', featureType: 'Basic'},
    {featureName: 'Schnelle Ladezeit', featureType: 'Basic'},
    {featureName: 'Sicherheit', featureType: 'Basic'},
    {featureName: 'SEO', featureType: 'Basic'},
    {featureName: 'Qualitätsinhalte', featureType: 'Basic'},
    {featureName: 'Kontaktinformationen', featureType: 'Basic'},
    {featureName: 'Social-Media Integration', featureType: 'Basic'},
    {featureName: 'Analyse und Feedback', featureType: 'Basic'},
    {featureName: 'Datenschutz und Rechtliches', featureType: 'Basic'},
    {featureName: 'Branding', featureType: 'Basic'},

    {featureName: 'Responsive Design', featureType: 'Advanced'},
    {featureName: 'Call-to-Action', featureType: 'Advanced'},
    {featureName: 'Visuelle Elemente', featureType: 'Advanced'},
    {featureName: 'Hohe Inhaltsqualität', featureType: 'Advanced'},

    {featureName: 'Kontakt-Automatisierung', featureType: 'Premium'},
    {featureName: 'Kauf-Automatisierung', featureType: 'Premium'}
];

const basicFeatures = features.filter(feature => feature.featureType === 'Basic');
const advancedFeatures = features.filter(feature => feature.featureType === 'Basic'|| feature.featureType === 'Advanced');
const premiumFeatures = features.filter(feature => feature.featureType === 'Basic' || feature.featureType === 'Advanced' || feature.featureType === 'Premium');

const descriptionBasic = 'Für einen einfachen, professionellen Online-Auftritt. Es bietet eine grundlegende Präsenz im Internet, die es Ihnen ermöglicht, ihre Markenidentität zu etablieren und potenzielle Kunden zu erreichen.';
const descriptionAdvanced = 'Ein professioneller Online-Auftritt, der über das Grundlegende hinausgeht. Die Funktionspalette verfeinert Ihre Präsenz im Internet und schafft zudem eine umfänglich ansprechende Platform für Ihre Kunden. Eine Optimierte Darstellung in allen Suchmaschinen.';
const descriptionPremium = 'Das Rundum-sorglos-Paket. Durch modernste Funktionen, sowie hochwertigem Design bieten Sie Ihrem Unternehmen die perfekte Präsenz im Internet. Die einfache Bedienung und Verknüpfung ermöglicht es Ihnen professionell und schnell mit Ihren Kunden zu interagieren. Maßgeschneidertes Webdesign und Sichtbarkeit in allen Suchmaschinen für optimiertes Marketing.';

serviceData[0] =  {packName: 'BASIC | MODERNE UNTERNEHMENS-WEBSITE', packFeatures: basicFeatures, packPrice: '399,- €', packDescription: descriptionBasic};
serviceData[1] = {packName: 'ADVANCDED | PROFFESSIONELLE UNTERNEHMENS-WEBSITE', packFeatures: advancedFeatures, packPrice: '899,- €', packDescription: descriptionAdvanced};
serviceData[2] = {packName: 'PREMIUM | AUTOMATISIERTE UNTERNEHMENS-WEBSITE', packFeatures: premiumFeatures, packPrice: '1199,- €', packDescription: descriptionPremium};