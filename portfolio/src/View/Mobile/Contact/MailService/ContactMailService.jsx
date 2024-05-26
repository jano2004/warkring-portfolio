const createMessage = (fullName, email, number, selectedHauptziel, selectSecondaryGoal, selectMainGoal, extras) => {
    console.log(selectedHauptziel + selectSecondaryGoal + selectMainGoal)
    const text = 'Hallo liebes Warkring-Team, \n\nhiermit sende ich Ihnen ein paar Daten zu meiner gewünschten Webseite.\n\n'
    const constHauptziel = 'Zweck: ' + (selectedHauptziel === 'info' ? 'Informationsbereitstellung'
        : selectedHauptziel === 'bildung' ? 'Bildung und Training'
            : selectedHauptziel === 'portfolio' ? 'Portfolio / Präsentation'
                : selectedHauptziel === 'marketing' ? 'Marketing / Werbung' : 'Nicht sicher!') + '\n';
    const constSecondaryGoal = selectedHauptziel === null ? '' : 'Unterziel: ' + (selectSecondaryGoal === 'selbst' ? 'Über mich selbst'
        : selectSecondaryGoal === 'unternehmen' ? 'Über mein Unternehmen'
            : selectSecondaryGoal === 'verbreitung' ? 'Informationsverbreitung'
                : selectSecondaryGoal === 'allgemein' ? 'Allgemeine Bildung'
                    : selectSecondaryGoal === 'schule' ? 'Schulische Bildung'
                        : selectSecondaryGoal === 'personal' ? 'Personal-Training'
                            : selectSecondaryGoal === 'tipps' ? 'Trainings-Tipps'
                                : selectSecondaryGoal === 'portfolio' ? 'Portfolio'
                                    : selectSecondaryGoal === 'leistungen' ? 'Dienstleistungen'
                                        : selectSecondaryGoal === 'about' ? 'Über uns / mich'
                                            : selectSecondaryGoal === 'info' ? 'Mein Produkt bewerben'
                                                : selectSecondaryGoal === 'selbstbewerben' ? 'Mich selbst bewerben'
                                                    : selectSecondaryGoal === 'marketing' ? 'Produkte anderer bewerben'
                                                        : 'Nicht sicher!') + '\n';
    const constMainGoal = 'Ziel: ' + (selectMainGoal === 'traffic' ? 'Traffic'
        : selectMainGoal === 'zahlen' ? 'Verkaufszahlen'
            : selectMainGoal === 'contact' ? 'Kontaktanfragen'
                : selectMainGoal === 'feedback' ? 'Kundenfeedback und -bewertung'
                    : 'Nicht sicher!') + '\n\n Ich freue mich von euch zu hören!\n\n'
    return text + constHauptziel + constSecondaryGoal + constMainGoal + (extras !== null ? extras : '') + '\n' + fullName;
};

export const sendMail = (fullName, email, number, selectedHauptziel, selectSecondaryGoal, selectMainGoal, extras) => {
    if(fullName !== null && fullName !== '' &&
        email !== null && email !== '') {
        const fullNameAndEmail = `${fullName} | ${email}`;
        const message = createMessage(fullName, email, number, selectedHauptziel, selectSecondaryGoal, selectMainGoal, extras);
        window.location.href = `mailto:kontakt@warkring.org?subject=${encodeURIComponent(fullNameAndEmail)}&body=${encodeURIComponent(message)}`;
    } else {

    }
};