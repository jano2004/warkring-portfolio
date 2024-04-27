import {features} from '../Feature/FeaturesData';

// ServiceFeatures
export const basicFeatures = features.filter(feature => feature.featureType === 'Basic');
const advancedFeatures = features.filter(feature => feature.featureType === 'Basic'|| feature.featureType === 'Advanced');
const premiumFeatures = features.filter(feature => feature.featureType === 'Basic' || feature.featureType === 'Advanced' || feature.featureType === 'Premium');

// ServiceDescription
const descriptionBasic = 'Für einen einfachen, professionellen Online-Auftritt.';
const descriptionAdvanced = 'Ein professioneller Online-Auftritt, der über das Grundlegende hinausgeht.';
const descriptionPremium = 'Maximal professioneller Online-Auftritt.';

// ServiceAdvertisingText
const advertisingBasic = '';
const advertisingAdvanced = '';
const advertisingPremium = 'Die Besten Features für Ihre Online-Website.';

const advertisingCustom = 'Zahlen Sie nur für was Sie brauchen.';


export let servicesData = new Array(3);

servicesData[0] =  { 
    serviceName: 'Basic',
    serviceFeatures: basicFeatures,
    servicePrice: '399',
    serviceDescription: descriptionBasic,
    serviceAdvertisingText: advertisingBasic};
servicesData[1] = {  
    serviceName: "Advanced",
    serviceFeatures: advancedFeatures,
    servicePrice: '899',
    serviceDescription: descriptionAdvanced,
    serviceAdvertisingText: advertisingAdvanced};
servicesData[2] = {  
    serviceName: 'Premium',
    serviceFeatures: premiumFeatures,
    servicePrice: '1199',
    serviceDescription: descriptionPremium,
    serviceAdvertisingText: advertisingPremium};

export let customServiceData = {
    serviceName: 'Custom',
    serviceFeatures: basicFeatures,
    servicePrice: '499',
    serviceDescription: '',
    serviceAdvertisingText: advertisingCustom};