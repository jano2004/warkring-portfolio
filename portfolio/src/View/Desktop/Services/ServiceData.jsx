import {features} from '../Feature/FeaturesData';

export const basicFeatures = features.filter(feature => feature.featureType === 'Basic');
const advancedFeatures = features.filter(feature => feature.featureType === 'Basic'|| feature.featureType === 'Advanced');
const premiumFeatures = features.filter(feature => feature.featureType === 'Basic' || feature.featureType === 'Advanced' || feature.featureType === 'Premium');

const descriptionBasic = 'Für einen einfachen, professionellen Online-Auftritt.';
const descriptionAdvanced = 'Ein professioneller Online-Auftritt, der über das Grundlegende hinausgeht.';
const descriptionPremium = 'Maximal professioneller Online-Auftritt.';

export let serviceData = new Array(3);

serviceData[0] =  { packName: 'BASIC',
    packFeatures: basicFeatures,
    packPrice: '399',
    packDescription: descriptionBasic};
serviceData[1] = {  packName: "ADVANCED",
    packFeatures: advancedFeatures,
    packPrice: '899',
    packDescription: descriptionAdvanced};
serviceData[2] = {  packName: 'PREMIUM',
    packFeatures: premiumFeatures,
    packPrice: '1199',
    packDescription: descriptionPremium};

export const addOnFeatures = features.filter(feature => feature.featureType === 'Advanced' || feature.featureType === 'Premium');