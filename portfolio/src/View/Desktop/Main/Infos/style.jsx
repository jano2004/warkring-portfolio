export const style = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        userSelect: 'none',
        scrollSnapAlign: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        width: '70%',
        height: '200px',
        background: ''
    },
    leftInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '700px',
        opacity: 0,
        transform: 'translateX(50%)',
        transition: 'all 0.3s ease-in-out',
        background: ''
    },
    leftInfoSlideIn: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    rightInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '700px',
        opacity: 0,
        transform: 'translateX(-50%)',
        transition: 'all 0.3s ease-in-out',
        background: '',
    },
    rightInfoSlideIn: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    infoHeader: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '600',
        margin: '0',
        fontSize: '3rem',
        letterSpacing: '1.5px',
        color: 'rgba(21,33,212,0.7)',
        padding: '0 30px 0 30px',
        width: '800px',
        textAlign: 'center'
    },
    infoText: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '200',
        fontSize: '1.5rem',
        margin: '0',
        padding: '0 30px 0 30px',
        textAlign: 'center'
    },
    a: {
        fontWeight: '500',
        textDecoration: 'none',
        color: 'black',
        cursor: 'default'
    }
}