import {styles} from "./style";
import {style} from "../../Main/Main/style";
import Header from "../../Header/Header";
import Body from "../Body/Body";

export default function Main() {
    return (
        <div style={{...styles.main.container}}>
            <div style={style.header}>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
        </div>
    )
}