export const propsPrimaryGoal = (selected) => {
    return {
        header: 'Hauptziel und Zweck',
        description: 'Was möchten Sie mit der von Ihnen gewünschten Webseite erreichen?',
        missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
        content: [
            {
                props: 'Informations-\nbereitstellung',
                id: 'info',
                state: selected === 'info',
                position: 'first'
            },
            {
                props: 'Bildung und\nTraining',
                id: 'bildung',
                state: selected === 'bildung',
                position: 'first'},
            {
                props: 'Portfolio /\nPräsentation',
                id: 'portfolio',
                state: selected === 'portfolio',
                position: 'first'
            },
            {
                props: 'Marketing /\nWerbung',
                id: 'marketing',
                state: selected === 'marketing',
                position: 'first'
            }
        ],
        index: 0
    }
}

export const propsSecondaryGoal = (selectedPrimaryGoal, selected, elseSelected, pageState, setPageState) => {
    if(selectedPrimaryGoal === 'info') {
        return {
            header: 'Informationsbereitstellung',
            description: 'Wozu dient Ihre Informationsbereitstellungsseite?',
            missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
            content: [
                {
                    props: 'Über mich selbst',
                    id: 'selbst',
                    state: selected === 'selbst',
                    position: 'second'
                },
                {
                    props: 'Über mein Unternehmen',
                    id: 'unternehmen',
                    state: selected === 'unternehmen',
                    position: 'second'},
                {
                    props: 'Informations- \nverbreitung',
                    id: 'verbreitung',
                    state: selected === 'verbreitung',
                    position: 'second'
                },
            ],
            index: 10
        }
    } else if (selectedPrimaryGoal === 'bildung') {
        return {
            header: 'Bildung und Training',
            description: 'Was möchten Sie Ihren Nutzern beibringen?',
            missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
            content: [
                {
                    props: 'Allgemeine Bildung',
                    id: 'allgemein',
                    state: selected === 'allgemein',
                    position: 'second'
                },
                {
                    props: 'Schulische Bildung',
                    id: 'schule',
                    state: selected === 'schule',
                    position: 'second'
                },
                {
                    props: 'Personal-Training',
                    id: 'personal',
                    state: selected === 'personal',
                    position: 'second'
                },
                {
                    props: 'Trainings-Tipps',
                    id: 'tipps',
                    state: selected === 'tipps',
                    position: 'second'
                }
            ],
            index: 10
        }
    } else if (selectedPrimaryGoal === 'portfolio') {
        return {
            header: 'Portfolio / Präsentation',
            description: 'Was möchten Sie Ihren Nutzern über Sie erzählen?',
            missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
            content: [
                {
                    props: 'Portfolio',
                    id: 'portfolio',
                    state: selected === 'portfolio',
                    position: 'second'
                },
                {
                    props: 'Dienstleistungen',
                    id: 'leistungen',
                    state: selected === 'leistungen',
                    position: 'second'
                },
                {
                    props: 'Über uns / mich',
                    id: 'about',
                    state: selected === 'about',
                    position: 'second'
                },
            ],
            index: 10
        }
    } else if (selectedPrimaryGoal === 'marketing') {
        return {
            header: 'Marketing / Werbung',
            description: 'Was möchten Sie vermarkten?',
            missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
            content: [
                {
                    props: 'Mein Produkt bewerben',
                    id: 'info',
                    state: selected === 'info',
                    position: 'second'
                },
                {
                    props: 'Mich selbst bewerben',
                    id: 'selbstbewerben',
                    state: selected === 'selbstbewerben',
                    position: 'second'
                },
                {
                    props: 'Produkte anderer bewerben',
                    id: 'marketing',
                    state: selected === 'marketing',
                    position: 'second'
                }
            ],
            index: 10
        }
    }
}

export const propsMainGoal = (selected) => {
    return {
        header: 'Hauptziel und Zweck',
        description: 'Was möchten Sie mit der von Ihnen gewünschten Webseite erreichen?',
        missing: 'Für anderes lassen Sie dieses Feld frei und drücken Sie auf "Weiter"',
        content: [
            {
                props: 'Traffic',
                id: 'traffic',
                state: selected === 'traffic',
                position: 'third'
            },
            {
                props: 'Verkaufszahlen',
                id: 'zahlen',
                state: selected === 'zahlen',
                position: 'third'
            },
            {
                props: 'Kontaktanfragen',
                id: 'contact',
                state: selected === 'contact',
                position: 'third'
            },
            {
                props: 'Kundenfeedback\n und -bewertung',
                id: 'feedback',
                state: selected === 'feedback',
                position: 'third'
            }
        ],
        index: 15
    }
}

export const propsPersonalData = () => {
    return {
        header: 'Jetzt zu Ihnen',
        text: 'Wir brauchen noch ein paar persönliche Daten von Ihnen',
    }
}