import {colors} from "../../../Services/ThemeService/Colors";

export const selectPaket = {
    header: 'Ihr Wunschpaket.',
    text: 'Welches Paket benötigen Sie, für die gewünschte Umsetzung?',
    underText:
        <p>Unser Standard-Paket ist ideal für Einsteiger, die mit WordPress eine professionelle Webseite erstellt haben
            möchten. <br></br>
            Es bietet eine solide Grundlage mit grundlegenden Funktionen. <br></br><br></br>
            Das Erweiterte Paket bietet zusätzliche Tools und Optionen für eine weitergehende Anpassung und eignet sich
            für wachsende Unternehmen. <br></br><br></br>
            Für höchste Ansprüche ist unser Premium-Paket die beste Wahl, <br></br>
            das mit Technologien wie React komplexe und interaktive Websites ermöglicht, die Spitzenleistung und
            Flexibilität verlangen.<br></br><br></br>
            Wenn Sie sich unsicher sind, wählen sie Beratung und geben Sie uns einen Termin, an dem wir Sie erreichen können</p>,
    cardProps: [
        'Standard', 'Erweitert', 'Premium', 'Beratung'
    ],
    id: [
        'standard', 'erweitert', 'premium', 'beratung'
    ]
}

export const selectMainTopic  = {
    header: 'Hauptziel und Zweck.',
    text: 'Was möchten Sie mit der von Ihnen gewünschten Webseite erreichen?',
    underText:
        <p style={{margin: '0'}}>
            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Informationswebseite:<br/></p1>
            Zentrale Plattform für Unternehmensdetails, Neuigkeiten und öffentliche Services.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Bildungs-/Trainingswebseite:<br/></p1>
            Bildungsressourcen, Kurse und interaktive Lernmöglichkeiten online.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Portfolio-/Präsentationswebseite:<br/></p1>
            Schaufenster für kreative oder berufliche Projekte und Errungenschaften.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Marketing-/Werbungswebseite:<br/></p1>
            Plattform für Produktförderung, Markenbewusstsein und Lead-Generierung.<br/><br/>
        </p>,
    cardProps: [
    <p style={{margin: '0'}}>Informations-<br></br>webseite</p>,
    <p style={{margin: '0'}}>Bildungs-/<br></br>Trainingswebseite</p>,
    <p style={{margin: '0'}}>Portfolio-/<br></br>Präsentations-<br></br>webseite</p>,
        <p style={{margin: '0'}}>Marketing-/<br></br>Werbungs-<br/>webseite</p>
    ],
    id: [
        'info', 'bildung', 'portfolio', 'marketing'
    ]
}

const selectTopicInfo  = {
    header: 'Informationswebseite.',
    text: 'Jetzt etwas spezifischer: welchem Thema dient Ihre Informations-Webseite?',
    underText: <p>
        <p1 style={{
            fontWeight: '500',
            color: colors.selectableTileLightmode(true)
        }}>Über uns/Unternehmensinformation:<br/></p1>
        Seiten, die sich darauf konzentrieren, detaillierte Informationen über
        ein Unternehmen, seine Geschichte, Mission und Werte zu bieten.<br/><br/>

        <p1 style={{
            fontWeight: '500',
            color: colors.selectableTileLightmode(true)
        }}>News- und Eventplattform:<br/></p1>
        Webseiten, die aktuelle Nachrichten, Updates und Informationen
        über bevorstehende Veranstaltungen bereitstellen.<br/><br/>

        <p1 style={{
            fontWeight: '500',
            color: colors.selectableTileLightmode(true)
        }}>Öffentliche Dienstleistungen:<br/></p1>
        Informationsseiten von staatlichen oder gemeinnützigen Organisationen,
        die Informationen zu verschiedenen Bürgerservices bieten.<br/><br/>

        <p1 style={{
            fontWeight: '500',
            color: colors.selectableTileLightmode(true)
        }}>Wissensdatenbanken und FAQ:<br/></p1>
        Spezialisierte Seiten, die tiefgehende Informationen zu spezifischen
        Themen bieten und häufig gestellte Fragen beantworten.
    </p>,
    cardProps: [
        <p style={{margin: '0'}}>Über uns/<br></br>Unternehmens-<br></br>information</p>,
        <p style={{margin: '0'}}>News- und <br></br>Eventplattform</p>,
        <p style={{margin: '0'}}>Öffentliche <br></br>Dienstleistungen</p>,
        <p style={{margin: '0'}}>Wissens-<br></br>datenbanken <br></br>und FAQ</p>
    ],
    id: [
        'selbst', 'unternehmen', 'verbreitung', 'wissen'
    ]
}

const selectTopicBildung  = {
    header: 'Bildungs-/Trainingswebseite.',
    text: 'Jetzt etwas spezifischer: welchem Thema dient Ihre Bildungs-Webseite?',
    underText:
        <p>
            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Akademische Institutionen:<br/></p1>
            Webseiten von Schulen, Hochschulen und Universitäten,
            die Informationen über Kurse, Zulassungen und akademische
            Ressourcen anbieten.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Online-Tutorial-Seiten:<br/></p1>
            Plattformen, die spezifische Anleitungen und Tutorials für
            verschiedene Fähigkeiten oder Fachwissen bieten.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Berufliche Fortbildung:<br/></p1>
            Webseiten, die Kurse und Zertifizierungen für die berufliche
            Weiterbildung anbieten.<br/><br/>

            <p1 style={{
                fontWeight: '500', color:
                    colors.selectableTileLightmode(true)
            }}>Sprachlernplattformen:<br/></p1>
            Spezialisierte Seiten zum Erlernen neuer Sprachen, oft
            interaktiv gestaltet.
        </p>,
    cardProps: [
        <p style={{margin: '0'}}>Akademische <br></br>Institutionen</p>,
        <p style={{margin: '0'}}>Online-<br></br>Tutorial-Seiten</p>,
        <p style={{margin: '0'}}>Berufliche <br></br>Fortbildung</p>,
        <p style={{margin: '0'}}>Sprachlern-<br></br>plattformen</p>
    ],
    id: [
        'akademisch', 'tutorial', 'fortbildung', 'sprachen'
    ]
}

const selectTopicPortfolio = {
    header: 'Portfolio-/Präsentationswebseite',
    text: 'Was möchten Sie mit der von Ihnen gewünschten Webseite erreichen?',
    underText:
        <p>
            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Künstler- und Designerportfolios:<br/></p1>
            Webseiten, die die kreativen Arbeiten von Einzelpersonen wie Künstlern, Grafikdesignern oder Fotografen
            präsentieren.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Firmenpräsentationen:<br/></p1>
            Seiten, die die Dienstleistungen, Produkte und Kompetenzen eines Unternehmens zur Schau stellen.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Freiberufler-Showcases:<br/></p1>
            Individuelle Webseiten, die die Dienstleistungen und Fähigkeiten von Freiberuflern in verschiedenen Branchen
            zeigen.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Architektur- und Immobilienportfolios:<br/></p1>
            Spezialisierte Webseiten, die Projekte und Designs von Architekten oder die verfügbaren Immobilien von
            Maklern präsentieren.
        </p>,
    cardProps: [
        <p style={{margin: '0'}}>Künstler- und <br></br>Designerportfolios</p>,
        <p style={{margin: '0'}}>Firmen-<br></br>präsentationen</p>,
        <p style={{margin: '0'}}>Freiberufler-<br></br>Showcases</p>,
        <p style={{margin: '0'}}>Architektur- und <br></br>Immobilien-<br></br>portfolios</p>
    ],
    id: [
        'kuenstler', 'firmen', 'freiberufler', 'architekt'
    ]
}

const selectTopicMarketing = {
    header: 'Marketing-/Werbungswebseite',
    text: 'Was möchten Sie mit der von Ihnen gewünschten Webseite erreichen?',
    underText:
        <p>
            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Produktlaunch-Seiten:<br/></p1>
            Spezialisierte Seiten, die auf die Einführung neuer Produkte oder Dienstleistungen ausgerichtet
            sind.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Kampagnen-spezifische Seiten:<br/></p1>
            Webseiten, die für spezielle Marketingkampagnen erstellt wurden und oft zeitlich begrenzt sind.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Affiliate-Marketing-Seiten:<br/></p1>
            Webseiten, die Produkte oder Dienstleistungen anderer Unternehmen bewerben und bei Verkäufen Provisionen
            verdienen.<br/><br/>

            <p1 style={{
                fontWeight: '500',
                color: colors.selectableTileLightmode(true)
            }}>Brand-Promotion-Seiten:<br/></p1>
            Seiten, die darauf abzielen, das Bewusstsein und das Image einer Marke zu fördern.
        </p>,
    cardProps: [
        <p style={{margin: '0'}}>Produktlaunch-<br></br>Seiten</p>,
        <p style={{margin: '0'}}>Kampagnen-<br></br>spezifische Seiten</p>,
        <p style={{margin: '0'}}>Affiliate-<br></br>Marketing-Seiten</p>,
        <p style={{margin: '0'}}>Brand-<br></br>Promotion-Seiten</p>
    ],
    id: [
        'launch', 'kampagne', 'affiliate', 'brand'
    ]
}


export const selectTopic = (mainTopic) => {
    if (mainTopic === 'info') {
        return selectTopicInfo;
    } else if (mainTopic === 'bildung') {
        return selectTopicBildung;
    } else if (mainTopic === 'portfolio') {
        return selectTopicPortfolio;
    } else if (mainTopic === 'marketing') {
        return selectTopicMarketing;
    }
}