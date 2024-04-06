import React from 'react';
import './Service.css'; // Make sure your CSS path is correct

function Service({ header, listItems, price, onMoreClick}) {
    return (
        <section className="main_service_section">
            <div className="main_service_header">
                <p>{header}</p>
            </div>
            <div className="main_service_list">
                {Object.entries(listItems).map(([key, value], index) => (
                    <div key={key} className="checkbox_container">
                        <input type="checkbox" id={`cbx-${index}`} className="cbx" hidden checked/>
                        <label htmlFor={`cbx-${index}`} className="check">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                                <path d="M1,9 L7,14 L17,4" />
                            </svg>
                        </label>
                        <label htmlFor={`cbx-${index}`}>{value}</label>
                    </div>
                ))}
            </div>
            <div className="main_service_bottom">
                <p>{price}€</p>
                <button onClick={onMoreClick}>MEHR</button>
            </div>
        </section>
    );
}

export default Service;
