export const style = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100vh',
        background: 'black',
        userSelect: 'none'
    },
    container: {
        main: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '60%',
            background: ''
        },
        left: {
            main: {
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                background: ''
            },
            container: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '75%',
                height: '80%',
                background: ''
            },
            banner: {
                main: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '25px',
                    width: '170px',
                    background: 'black',
                    borderRadius: '8px',
                    border: '1px solid white',
                    opacity: '0',
                    transform: 'translateY(-300%)',
                    transition: 'all 0.5s ease-in-out'
                },
                slideIn: {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
                text: {
                    color: 'white',
                    fontSize: '0.9rem'
                }
            },
            header: {
                fontSize: '3.4rem',
                fontWeight: '800',
                color: 'white',
                margin: '10px 0 10px 0'
            },
            text: {
                fontSize: '1.2rem',
                fontWeight: '400',
                width: '80%',
                color: 'white',
                margin: '0 0 30px 0'
            },
            button: {
                container: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    background: '',
                },
                more: {
                    main: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'white',
                        borderRadius: '10px',
                        border: '1px solid rgb(37,118,136)',
                        height: '50px',
                        padding: '0 15px',
                        cursor: 'pointer',
                        opacity: '0',
                        transform: 'translateX(-100%)',
                        transition: 'all 0.5s ease-in-out'
                    },
                    hover: {
                        background: 'black',
                        border: '1px solid white',
                        transition: 'all 0.3s ease-in-out'
                    },
                },
                video: {
                    main: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'black',
                        borderRadius: '10px',
                        border: '1px solid white',
                        height: '50px',
                        padding: '0 15px',
                        cursor: 'pointer',
                        opacity: '0',
                        transform: 'translateX(-100%)',
                        transition: 'all 0.5s ease-in-out',
                    },
                    hover: {
                        background: 'white',
                        border: '1px solid black',
                        transition: 'all 0.3s ease-in-out',
                    },
                },
                slideIn: {
                    opacity: '1',
                    transform: 'translateX(0)',
                },
                text: {
                    fontSize: '1rem',
                    transition: 'all 0.3s ease-in-out'
                }
            }
        },
        right: {
            main: {
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                background: ''
            },
            container: {
                main: {
                    display: 'flex',
                    alignItems: 'center',
                    width: '75%',
                    borderRadius: '10px',
                    opacity: '0',
                    transition: 'all 0.4s ease-in-out',
                    background: ''
                },
                blurIn: {
                    opacity: '1',
                }
            },
            image: {
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                transition: 'all 0.2s ease-in-out'
            }
        }
    }
}

export const content = {
    banner: 'Die macht des Codes',
    header: 'Lasse alle Deine visuellen Träume in Erfüllung gehen.',
    info: 'Die Macht des Codes ermöglicht es Dir, alle freiheiten bei Erstellung deiner Website zu nutzen.',
    buttons: {
        more: 'Erfahre mehr',
        video: 'Video ansehen'
    }
}
