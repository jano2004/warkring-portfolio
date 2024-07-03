export const style = {
    main: {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        },
        left: {
            main: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
            },
            date: {
                container: {
                    width: '300px',
                    height: '300px'
                }
            },
            description: {
                container: {

                },
                header: {

                },
                text: {

                }
            }
        },
        right: {
            main: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
            }
        }
    }
}

export const content = {
    banner: 'Flexibel und einfach!'
}