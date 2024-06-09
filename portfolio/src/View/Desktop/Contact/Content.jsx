export const content = {
    mainGoal: [
        'einer Informationswebsite',
        'einer Bildungs-/Trainingswebsite',
        'einer Portfolio-/Präsentationswebsite',
        'einer Marketing-/ Werbungswebsite'
    ],
    topicInfo: [
        'über uns / über mein Unternehmen',
        'News- und Events',
        'Öffentliche Dienstleitungen',
        'Wissensdatenbanken und FAQ'
    ],
    topicBildung: [
        'Akademische Institutionen',
        'Online-Tutorials',
        'Berufliche Fortbildung',
        'Sprachlernplattformen'
    ],
    topicPortfolio: [
        'Künstler- und Designerportfolio',
        'Firmenpräsentationen',
        'Freiberufler-Showcases',
        'Architektur- und Immobilienportfolio'
    ],
    topicMarketing: [
        'Produktlaunch-Seiten',
        'Kampagnenspezifische Seiten',
        'Affiliate-Marketing-Seiten',
        'Brand-Promotion-Seiten'
    ]
}

export const dropdownContent = {
    goal: [
        'Informationswebsite',
        'Bildungs-/ Trainingswebseite',
        'Portfolio-/ Präsentationswebseite',
        'Marketing-/ Werbungswebseite'
    ],
    info: [
        'Über uns / Unternehmensinformation',
        'News- und Eventplattform',
        'Öffentliche Dienstleistungen',
        'Wissensdatenbanken und FAQ'
    ],
    bildung: [
        'Akademische Institutionen',
        'Online-Tutorial-Seiten',
        'Berufliche Fortbildung',
        'Sprachlernplattformen'
    ],
    portfolio: [
        'Künstler- und Designerportfolios',
        'Firmenpräsentationen',
        'Freiberufler-Showcases',
        'Architektur- und Immobilienportfolios'
    ],
    marketing: [
        'Produktlaunch-Seiten',
        'Kampagnen-spezifische Seiten',
        'Affiliate-Marketing-Seiten',
        'Brand-Promotion-Seiten'
    ]
}

export const style = {
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '10px',
        marginTop: '40px',
        paddingTop: '40px',
        height: '1400px',
        overflowY: 'scroll'
    },
    header: {
        width: '85%',
        fontSize: '32px',
        fontWeight: '700',
        color: 'black',
        margin: '0 0 17px 5px',
        textAlign: 'left',
        userSelect: 'none'
    },
    text: {
        width: '85%',
        fontSize: '16px',
        fontWeight: '400',
        color: 'black',
        margin: '0 0 20px 5px',
        textAlign: 'left',
        userSelect: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    },
    selectContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px'
    },
    textDateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textarea: {
        height: '170px',
        width: 'calc(85% - 20px)',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        resize: 'none',
        padding: ' 15px 0 0 20px',
        outline: 'none'
    },
    dateTimePicker: {
        width: 'calc(85% - 60px)',
        height: '70px',
        padding: '0 40px 0 20px',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        outline: 'none'
    },
    input: {
        width: 'calc(85% - 20px)',
        height: '70px',
        padding: '0 0 0 20px',
        borderRadius: '10px',
        fontSize: '20px',
        outline: 'none',
        transition: 'all 0.1s ease-in-out'
    },
    inputLabel: {
        width: '85%',
        textAlign: 'left',
        margin: '10px 0 0 5px',
        fontWeight: '200',
        userSelect: 'none'
    },
    sendButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17px 35px 17px 35px',
        color: 'white',
        fontSize: '17px',
        borderRadius: '10px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '400',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s ease-in-out'
    },
    outputTextarea: {
        height: '400px',
        width: 'calc(85% - 20px)',
        borderRadius: '10px',
        fontSize: '17px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        resize: 'none',
        padding: ' 15px 0 0 20px',
        outline: 'none',
        userSelect: 'none',
        cursor: 'pointer'
    }
}