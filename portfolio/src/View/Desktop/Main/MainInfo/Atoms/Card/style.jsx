import {colors} from "../../../../../../Services/ThemeService/Colors";

export const style = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '30px',
        background: 'white'
    },
    description: {
        main: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none'
        },
        header: {
            fontSize: '1.2rem',
            textAlign: 'center'
        },
        text: {
            textAlign: 'center',
            width: '90%'
        },
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            background: colors.mainAccentColor,
            border: 0,
            width: '150px',
            borderRadius: '10px',
            height: '30px',
            color: 'white',
            fontWeight: '500',
            fontSize: '0.8rem'
        }
    }
}