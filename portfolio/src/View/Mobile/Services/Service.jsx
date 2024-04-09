import './Service.css';
import Header from "../Main/Header/Header";
import Services from "./Service/Services";
import Catalog from "../Catalog/Catalog";
import React, {useState} from "react";

function Service({handleHomeClick, handleLoginClick, handelContactClick, handleMoreClick}) {
    const [catalog, setCatalog] = useState(false);

    const handleOpenCatalog = () => {
        setCatalog(prevCatalog => !prevCatalog);
    }

    return (
        <div>
            <Header handleHomeClick={handleHomeClick} handleLoginClick={handleLoginClick} handleOpenCatalog={handleOpenCatalog} />
            <div className={`main_catalog_section ${catalog ? 'shownCatalog' : 'hiddenCatalog'}`}>
                <Catalog handleHomeClick={handleHomeClick} handleMoreClick={handleMoreClick} handelContactClick={handelContactClick}/>
            </div>
            <Services handelContactClick={handelContactClick}/>
        </div>
    )
}

export default Service;