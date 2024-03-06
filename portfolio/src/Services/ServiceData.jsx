let optimierungsServiceFeatures = new Array(8);
append(optimierungsServiceFeatures, 'WEBSITEOPTIMIERUNG');
append(optimierungsServiceFeatures, 'Schnellere Ladezeit');
append(optimierungsServiceFeatures, 'Analyse und Feedback');
append(optimierungsServiceFeatures, 'Farbhemen-Anpassung');
append(optimierungsServiceFeatures, 'Sicherheit');
append(optimierungsServiceFeatures, 'Datenschutz');
append(optimierungsServiceFeatures, 'SEO');
append(optimierungsServiceFeatures, '149,- €');

let basicServiceFeatures = new Array(12);
append(basicServiceFeatures, 'BASIC | MODERNE UNTERNEHMENS-WEBSITE');
append(basicServiceFeatures, 'Benutzerfreundlichkeit');
append(basicServiceFeatures, 'Schnelle Ladezeit');
append(basicServiceFeatures, 'Sicherheit');
append(basicServiceFeatures, 'SEO');
append(basicServiceFeatures, 'Qualitätsinhalte');
append(basicServiceFeatures, 'Kontaktinformationen');
append(basicServiceFeatures, 'Social-Media Integration');
append(basicServiceFeatures, 'Analyse und Feedback');
append(basicServiceFeatures, 'Datenschutz und Rechtliches');
append(basicServiceFeatures, 'Branding');
append(basicServiceFeatures, '399,- €');

let standartServiceFeatures = new Array(16);
append(standartServiceFeatures, 'STANDART | MODERNE UNTERNEHMENS-WEBSITE')
append(standartServiceFeatures, 'Benutzerfreundlichkeit');
append(standartServiceFeatures, 'Schnelle Ladezeit');
append(standartServiceFeatures, 'Sicherheit');
append(standartServiceFeatures, 'SEO');
append(standartServiceFeatures, 'Qualitätsinhalte');
append(standartServiceFeatures, 'Kontaktinformationen');
append(standartServiceFeatures, 'Social-Media Integration');
append(standartServiceFeatures, 'Analyse und Feedback');
append(standartServiceFeatures, 'Datenschutz und Rechtliches');
append(standartServiceFeatures, 'Branding');
append(standartServiceFeatures, 'Responsive Design');
append(standartServiceFeatures, 'Call-to-Action');
append(standartServiceFeatures, 'Visuelle Elemente');
append(standartServiceFeatures, 'Hohe Inhaltsqualität');
append(standartServiceFeatures, '899,- €');

let premiumServiceFeatures = new Array(18);
append(premiumServiceFeatures, "PREMIUM | AUTOMATISIERTE UNTERNEHMENS-WEBSITE");
append(premiumServiceFeatures, "Benutzerfreundlichkeit");
append(premiumServiceFeatures, "Schnelle Ladezeit");
append(premiumServiceFeatures, "Sicherheit");
append(premiumServiceFeatures, "SEO");
append(premiumServiceFeatures, "Qualitätsinhalte");
append(premiumServiceFeatures, "Kontaktinformationen");
append(premiumServiceFeatures, "Social-Media Integration");
append(premiumServiceFeatures, "Analyse und Feedback");
append(premiumServiceFeatures, "Datenschutz und Rechtliches");
append(premiumServiceFeatures, "Branding");
append(premiumServiceFeatures,  "Responsive Design");
append(premiumServiceFeatures,  "Call-to-Action");
append(premiumServiceFeatures,  "Visuelle Elemente");
append(premiumServiceFeatures,  "Hohe Inhaltsqualität");
append(premiumServiceFeatures,  "Kontakt-Automatisierung");
append(premiumServiceFeatures,  "Kauf-Automatisierung");
append(premiumServiceFeatures ,"1199,- €");

export let serviceData = new Array(4);
append(serviceData, optimierungsServiceFeatures);
append(serviceData, basicServiceFeatures);
append(serviceData, standartServiceFeatures);
append(serviceData, premiumServiceFeatures);

function append(list, data) {
    try{
        for(var i = 0; i < list.length; i++) {
            if(list[i] == null) {
                list[i] = data;
                return;
            }
        }
        return null;
    } catch (e) {
        console.log('not a list')
    }
}

