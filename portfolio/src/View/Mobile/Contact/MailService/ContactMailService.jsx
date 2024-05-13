const createMessage = (fullName, email, number, hauptziel, hauptzielSecond, erfolg) => {
    console.log(hauptziel + hauptzielSecond + erfolg)
    const hauptzielText = (hauptziel === 'info' ? 'Informations' : 'Placeholder');
    const hauptzielSecondText = (hauptzielSecond === 'selbst' ? 'um meine Person' :
        hauptzielSecond === 'unternehmen' ? 'um mein Unternehmen' :
            hauptzielSecond === 'verbreitung' ? 'um die Verbreitung von Informationen' :
                hauptzielSecond === 'sonstiges' ? 'Sonstigen' : 'Placeholder')
    const erfolgText = (erfolg === 'traffic' ? 'Traffic und Zugriffszahlen' :
        erfolg === 'verkauf' ? 'dem Verkauf von Produkten' :
            erfolg === 'leads' ? 'der Leads und Kontaktanfragen' :
                erfolg === 'feedback' ? 'des Kundenfeedbacks' :
                    erfolg === 'conversion' ? 'der Conversion-Rate' :
                        erfolg === 'sonstiges' ? '' : 'Placeholder')
    return `Hallo, Warkring-Team, \n\nich bin auf der Suche nach einer ${hauptzielText}-Webseite.\n` +
        `Es soll hauptsächlich ${hauptzielSecondText} gehen.\n` +
        `Ich würde den Erfolg meiner Webseite gerne anhand ${erfolgText} messen.\n` +
        `${number ? ` \nMeine Telefonnummer lautet: ${number}.` : ''}\n` +
        `\n\nMit freundlichen Grüßen,\n${fullName}`;
};

export const sendMail = (fullName, email, number, hauptziel, hauptzielSecond, erfolg) => {
    if(fullName !== null && fullName !== '' &&
        email !== null && email !== '') {
        const fullNameAndEmail = `${fullName} | ${email}`;
        const message = createMessage(fullName, email, number, hauptziel, hauptzielSecond, erfolg);
        window.location.href = `mailto:kontakt@warkring.org?subject=${encodeURIComponent(fullNameAndEmail)}&body=${encodeURIComponent(message)}`;
    } else {

    }
};