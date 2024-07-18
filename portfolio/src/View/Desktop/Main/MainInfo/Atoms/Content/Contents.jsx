import { PiDetectiveThin } from "react-icons/pi"; //Sicherheit / SSL
import { IoLockClosedOutline } from "react-icons/io5"; //Datensicherheit
import { BsClipboardData } from "react-icons/bs"; //Skalierbar
import { IoCodeSlashOutline } from "react-icons/io5"; //Code
import { IoEyeOutline } from "react-icons/io5"; //Transparenz
import { CiGlobe } from "react-icons/ci"; //Erreichbarkeit
import { PiCashRegisterLight } from "react-icons/pi"; //Preislich

export const ICONS = {
    LEFT: {
        TOP: <IoEyeOutline size={100}/>,
        BOTTOM: <IoCodeSlashOutline size={100}/>
    },
    CENTER: {
        TOP: <CiGlobe size={100}/>,
        CENTER: <PiDetectiveThin size={150}/>,
        BOTTOM: <BsClipboardData size={100}/>
    },
    RIGHT: {
        TOP: <PiCashRegisterLight size={100}/>,
        BOTTOM: <IoLockClosedOutline size={100}/>
    }
}

export const DESCRIPTION = {
    LEFT: {
        TOP: {
            HEADER: 'TRANSPARENZ',
            TEXT: 'Habe durchgehend ein Auge auf den Prozess Deiner Website'
        },
        BOTTOM: {
            HEADER: 'CODEBASE',
            TEXT: 'Mit einer Website auf Code-Basis gibt es keine Grenzen!'
        },
    },
    CENTER: {
        TOP: {
            HEADER: 'WELTWEIT',
            TEXT: 'Werde mit deiner Website überall auf der Welt gefunden!'
        },
        CENTER: {
            HEADER: 'SICHERHEIT',
            TEXT: 'Nichts ist wichtiger als die Sicherheit einer Website!'
        },
        BOTTOM: {
            HEADER: 'SKALIERBARKEIT',
            TEXT: 'Bekomme und Zahle nur das was du brauchst!'
        },
    },
    RIGHT: {
        TOP: {
            HEADER: 'ANGEBOT',
            TEXT: 'Bekomme ein Faires erstangebot geschätzt.'
        },
        BOTTOM: {
            HEADER: 'DATENSICHERHEIT',
            TEXT: 'Datenverlust kann nervig und Teuer werden.'
        }
    }
}