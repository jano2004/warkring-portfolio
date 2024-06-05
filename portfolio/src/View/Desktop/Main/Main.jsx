import Header from "../Header/Header";
import Body from "./Body/Body";

export default function Main() {
    const style = {
        section: {
            height: '98vh',
            width: '100%',
        }
    }

    return (
        <div style={style.section}>
            <Header/>
            <Body />
        </div>
    )
}