import './Service.css';
import Header from "../Main/Header/Header";
import Services from "./Service/Services";

function Service({handleHomeClick, handleLoginClick, handelContactClick}) {
    return (
        <div>
            <Header handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick} />
            <Services handelContactClick={handelContactClick}/>
        </div>
    )
}

export default Service;