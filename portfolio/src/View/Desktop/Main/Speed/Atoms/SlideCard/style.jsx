export const style = {
    main: {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '180px',
            width: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden',
            transform: 'translateX(70%)',
            transition: 'all 0.75s ease-in-out',
        },
        flyIn: {
            transform: 'translateX(0)'
        },
        hover: {
            transform: 'translateX(-50%)'
        },
        text: {
            fontSize: '130px',
            fontWeight: '800',
            color: 'white',
            padding: '10px 40px',
            overflowX: 'hidden'
        }
    }
}