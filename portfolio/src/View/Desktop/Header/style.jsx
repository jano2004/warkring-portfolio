export const navItemStyle = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35px',
        borderRadius: '7px'
    },
    paragraph: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '18px',
        fontWeight: '250',
        color: 'black',
        userSelect: 'none',
        cursor: 'pointer'
    },
    containerWithBackground: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(21,33,212,0.7)',
        height: '35px',
        borderRadius: '7px'
    },
    paragraphWithBackground: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '18px',
        fontWeight: '250',
        color: 'white',
        padding: '5px 15px',
        userSelect: 'none',
        cursor: 'pointer'
    }
};


export const style = {
    main: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        width: '100%',
    },
    backgroundBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        filter: '',
        zIndex: -1,
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        margin: '0 0 0 40px',
    },
    logo: {
        fontSize: '30px',
        fontWeight: '400',
        userSelect: 'none',
        cursor: 'pointer',
        color: 'black'
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        margin: '0 40px 0 0',
        padding: '12px 25px 12px 25px',
        background: 'white',
        borderRadius: '8px'
    }
}