import './Service.css';
import Header from "../Main/Header/Header";
import Services from "./Service/Services";

function Service({handleHomeClick, handleLoginClick}) {
    return (
        <div>
            <Header handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick}/>
            <Services />
        </div>
    )
}

export default Service;