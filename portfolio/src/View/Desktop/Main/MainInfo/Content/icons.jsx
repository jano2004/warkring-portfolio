import { AiOutlineSafety } from "react-icons/ai"; //Sicherheit / SSL
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
        CENTER: <AiOutlineSafety size={150}/>,
        BOTTOM: <BsClipboardData size={100}/>
    },
    RIGHT: {
        TOP: <PiCashRegisterLight size={100}/>,
        BOTTOM: <IoLockClosedOutline size={100}/>
    }
}