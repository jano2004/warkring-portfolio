import Header from "../Header/Header";
import Body from "./Body/Body";
import ShortInfo from "./Infos/ShortInfos/ShortInfo";

export default function Main() {
    const style = {
        section: {
            height: '100vh',
            width: '100%',
        }
    }

    return (
        <div style={style.section}>
            <Header/>
            <div style={{
                height: '95vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', background: 'white'}}>
                <Body />
            </div>
            <ShortInfo />
            <div style={{height: '200px', background: 'white'}}/>
        </div>
    )
}