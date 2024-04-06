import './Service.css';
import Header from "../Main/Header/Header";
import Services from "./Service/Services";

function Service({handleHomeClick}) {
    return (
        <div>
            <Header handleHomeClick={handleHomeClick}/>
            <Services />
        </div>
    )
}

export default Service;