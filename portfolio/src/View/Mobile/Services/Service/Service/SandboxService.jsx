import './ServiceSandbox.css';
import React from "react";

function SandboxService({header, listItems, price, handelContactClick}) {
    return (
        <section className="main_service_section">
            <div className="main_service_header">
                <p>{header}</p>
            </div>
            <div className="main_service_list">
                {Object.entries(listItems).map(([key, value], index) => (
                    <div key={key} className="checkbox_container">
                        <label className="container">
                            <input type="checkbox"/>
                            <div className="line"></div>
                            <div className="line line-indicator"></div>
                        </label>
                        <label htmlFor={`cbx-${index}`}>{value}</label>
                    </div>
                ))}
            </div>
            <div className="main_service_bottom">
                <p>{price}€</p>
                <button onClick={handelContactClick}>KONTAKT</button>
            </div>
        </section>
    )
}

export default SandboxService;