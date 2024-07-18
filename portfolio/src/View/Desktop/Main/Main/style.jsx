export const style = {
    section: {
        width: '100%',
        overflowX: 'hidden',
    },
    header: {
        width: '100%',
    },
    body: {
        width: '100%',
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
    },
    scrollView: {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
    },
    white: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'white',
        scrollSnapAlign: 'center',
        overflowX: 'hidden'
    },
    black: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        scrollSnapAlign: 'center',
        background: 'black',
    }
};