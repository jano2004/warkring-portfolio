import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import Introduction from './Introduction/Introduction';
import './Main.css';

function MobileMain() {
    return (
        <div>
            <Header />
            <MainBody />
            <Introduction />
        </div>
    )
}

export default MobileMain;