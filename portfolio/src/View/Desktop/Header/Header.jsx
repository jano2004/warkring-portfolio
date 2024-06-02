import {colors} from "../../../Services/ThemeService/Colors";
import { CiCircleInfo } from "react-icons/ci";

export default function Header() {
    const style = {
        header: {
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '7vh', width: '100%',
            background: colors.selectableTileLightmode(true),
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: colors.mainTextColor(true),
            fontWeight: '300',
            fontSize: '1.2rem',
            margin: '0 15px 0 15px',
            textAlign: 'center'
        },
    }

    return (
        <div style={style.header}>
            <div style={style.textContainer}>
                <CiCircleInfo size={'25'} color={colors.mainTextColor(true)}/>
                <p style={style.text}>
                    Die Homepage ist aufgrund von Umbauarbeiten nicht zu erreichen. Sie können uns trotzdem über unser Kontaktformular erreichen!
                </p>
                <CiCircleInfo size={'25'} color={colors.mainTextColor(true)}/>
            </div>
        </div>
    )
}