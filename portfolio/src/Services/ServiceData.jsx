import {features} from '../Feature/FeaturesData';

export const basicFeatures = features.filter(feature => feature.featureType === 'Basic');
const advancedFeatures = features.filter(feature => feature.featureType === 'Basic'|| feature.featureType === 'Advanced');
const premiumFeatures = features.filter(feature => feature.featureType === 'Basic' || feature.featureType === 'Advanced' || feature.featureType === 'Premium');

const descriptionBasic = 'Für einen einfachen, professionellen Online-Auftritt. Es bietet eine grundlegende Präsenz im Internet, die es Ihnen ermöglicht, ihre Markenidentität zu etablieren und potenzielle Kunden zu erreichen.';
const descriptionAdvanced = 'Ein professioneller Online-Auftritt, der über das Grundlegende hinausgeht. Die Funktionspalette verfeinert Ihre Präsenz im Internet und schafft zudem eine umfänglich ansprechende Platform für Ihre Kunden.';
const descriptionPremium = 'Maximal professioneller Online-Auftritt. Benutzerfreundliche Bedienung und Verknüpfung für einfache, professionelle Interaktion mit Kunden. Maßgeschneidertes Webdesign und Sichtbarkeit in allen Suchmaschinen für optimiertes Marketing.';

export let serviceData = new Array(3);

serviceData[0] =  { packName: 'BASIC | MODERNE UNTERNEHMENS-WEBSITE',
    packFeatures: basicFeatures,
    packPrice: '399',
    packDescription: descriptionBasic};
serviceData[1] = {  packName: "ADVANCED | PROFFESSIONELLE UNTERNEHMENS-WEBSITE",
    packFeatures: advancedFeatures,
    packPrice: '899',
    packDescription: descriptionAdvanced};
serviceData[2] = {  packName: 'PREMIUM | AUTOMATISIERTE UNTERNEHMENS-WEBSITE',
    packFeatures: premiumFeatures,
    packPrice: '1199',
    packDescription: descriptionPremium};

export const addOnFeatures = features.filter(feature => feature.featureType === 'Advanced' || feature.featureType === 'Premium');